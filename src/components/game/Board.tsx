import { useMemo, useState } from 'react';
import {
  ADJACENCY,
  CATEGORY_COLORS,
  CATEGORY_SHORT_NAMES,
  CX,
  CY,
  NODES,
  RING_R,
  describeNode,
  spokeAngleDeg,
} from '../../game/board';
import { Player } from '../../game/types';

interface BoardProps {
  players: Player[];
  currentPlayerIndex: number;
  validDestinations: Record<number, number[]>;
  onSelectDestination: (nodeId: number) => void;
  phase: string;
}

const wait = (milliseconds: number) => new Promise((resolve) => window.setTimeout(resolve, milliseconds));

function radians(degrees: number) {
  return (degrees * Math.PI) / 180;
}

function pathPoints(path: number[]) {
  return path.map((id) => `${NODES[id].x},${NODES[id].y}`).join(' ');
}

export default function Board({
  players,
  currentPlayerIndex,
  validDestinations,
  onSelectDestination,
  phase,
}: BoardProps) {
  const [hoveredDestination, setHoveredDestination] = useState<number | null>(null);
  const [movingPath, setMovingPath] = useState<number[] | null>(null);
  const [animatedPosition, setAnimatedPosition] = useState<number | null>(null);
  const isSelecting = phase === 'selectingMove' && !movingPath;
  const validIds = Object.keys(validDestinations).map(Number);
  const highlightedPath = movingPath
    ?? (hoveredDestination !== null ? validDestinations[hoveredDestination] : null);

  const edges = useMemo(() => {
    const unique: Array<[number, number]> = [];
    ADJACENCY.forEach((neighbors, from) => {
      neighbors.forEach((to) => {
        if (from < to) unique.push([from, to]);
      });
    });
    return unique;
  }, []);

  const moveTo = async (nodeId: number) => {
    if (!isSelecting) return;
    const path = validDestinations[nodeId];
    if (!path) return;

    setHoveredDestination(null);
    setMovingPath(path);
    for (const step of path.slice(1)) {
      await wait(230);
      setAnimatedPosition(step);
    }
    await wait(140);
    onSelectDestination(nodeId);
    await wait(50);
    setAnimatedPosition(null);
    setMovingPath(null);
  };

  const positionPlayers: Record<number, Player[]> = {};
  players.forEach((player, index) => {
    const position = index === currentPlayerIndex && animatedPosition !== null
      ? animatedPosition
      : player.position;
    if (!positionPlayers[position]) positionPlayers[position] = [];
    positionPlayers[position].push(player);
  });

  return (
    <div className="board-shell" aria-label="TAS Sustainability Quest board">
      <svg viewBox="0 0 600 600" className="board-svg" role="img">
        <defs>
          <radialGradient id="board-background" cx="50%" cy="45%">
            <stop offset="0%" stopColor="#17324d" />
            <stop offset="60%" stopColor="#0b1f33" />
            <stop offset="100%" stopColor="#06111f" />
          </radialGradient>
          <filter id="node-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="token-shadow" x="-100%" y="-100%" width="300%" height="300%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.65" />
          </filter>
        </defs>

        <rect width="600" height="600" rx="28" fill="url(#board-background)" />
        <circle cx={CX} cy={CY} r={RING_R + 31} fill="none" stroke="#2b5272" strokeWidth="1" strokeDasharray="4 8" opacity="0.7" />

        {edges.map(([from, to]) => (
          <line
            key={`${from}-${to}`}
            x1={NODES[from].x}
            y1={NODES[from].y}
            x2={NODES[to].x}
            y2={NODES[to].y}
            stroke="#27445e"
            strokeWidth="10"
            strokeLinecap="round"
          />
        ))}

        {highlightedPath && highlightedPath.length > 1 && (
          <polyline
            points={pathPoints(highlightedPath)}
            fill="none"
            stroke="#f8fafc"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.72"
            className="route-line"
          />
        )}

        {CATEGORY_SHORT_NAMES.map((name, index) => {
          const angle = radians(spokeAngleDeg(index));
          const radius = RING_R + 54;
          return (
            <g key={name}>
              <circle
                cx={CX + radius * Math.cos(angle)}
                cy={CY + radius * Math.sin(angle)}
                r="5"
                fill={CATEGORY_COLORS[index]}
              />
              <text
                x={CX + (radius + 13) * Math.cos(angle)}
                y={CY + (radius + 13) * Math.sin(angle)}
                textAnchor="middle"
                dominantBaseline="middle"
                className="board-category-label"
              >
                {name}
              </text>
            </g>
          );
        })}

        {NODES.map((node) => {
          const isCenter = node.type === 'center';
          const isWedge = node.type === 'wedge';
          const isRollAgain = node.type === 'rollAgain';
          const radius = isCenter ? 30 : isWedge ? 19 : 13;
          const fill = isCenter
            ? '#102b44'
            : isRollAgain
              ? '#294861'
              : CATEGORY_COLORS[node.category!];
          return (
            <g key={node.id}>
              <circle
                cx={node.x}
                cy={node.y}
                r={radius}
                fill={fill}
                stroke={isWedge ? '#ffffff' : '#a9c4d8'}
                strokeWidth={isWedge ? 2.5 : 1}
                filter={isWedge ? 'url(#node-glow)' : undefined}
              />
              {isCenter && (
                <text x={node.x} y={node.y + 1} textAnchor="middle" dominantBaseline="middle" className="center-label">FINAL</text>
              )}
              {isWedge && (
                <path d={`M ${node.x} ${node.y - 8} L ${node.x + 8} ${node.y + 7} L ${node.x - 8} ${node.y + 7} Z`} fill="#ffffff" opacity="0.92" />
              )}
              {isRollAgain && (
                <text x={node.x} y={node.y + 1} textAnchor="middle" dominantBaseline="middle" className="roll-label">↻</text>
              )}
            </g>
          );
        })}

        {validIds.map((nodeId, index) => {
          const node = NODES[nodeId];
          const selected = hoveredDestination === nodeId;
          return (
            <g
              key={`destination-${nodeId}`}
              role="button"
              tabIndex={isSelecting ? 0 : -1}
              aria-label={`Destination ${index + 1}: ${describeNode(node)}`}
              className={isSelecting ? 'destination' : ''}
              onMouseEnter={() => isSelecting && setHoveredDestination(nodeId)}
              onMouseLeave={() => setHoveredDestination(null)}
              onFocus={() => isSelecting && setHoveredDestination(nodeId)}
              onBlur={() => setHoveredDestination(null)}
              onClick={() => moveTo(nodeId)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  moveTo(nodeId);
                }
              }}
            >
              <circle
                cx={node.x}
                cy={node.y}
                r={node.type === 'center' ? 38 : node.type === 'wedge' ? 29 : 23}
                fill={selected ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.06)'}
                stroke="#ffffff"
                strokeWidth={selected ? 4 : 2.5}
                className="destination-ring"
              />
              <circle cx={node.x + 18} cy={node.y - 18} r="10" fill="#f8fafc" />
              <text x={node.x + 18} y={node.y - 17} textAnchor="middle" dominantBaseline="middle" className="destination-number">{index + 1}</text>
            </g>
          );
        })}

        {players.map((player, playerIndex) => {
          const position = playerIndex === currentPlayerIndex && animatedPosition !== null
            ? animatedPosition
            : player.position;
          const node = NODES[position];
          const playersHere = positionPlayers[position] ?? [];
          const stackIndex = playersHere.findIndex((candidate) => candidate.id === player.id);
          const offsets = [[0, 0], [-10, -8], [10, -8], [-10, 9]];
          const [offsetX, offsetY] = playersHere.length > 1 ? offsets[stackIndex] ?? [0, 0] : [0, 0];
          const current = playerIndex === currentPlayerIndex;
          return (
            <g key={player.id} filter="url(#token-shadow)" className={current ? 'active-token' : ''}>
              {current && <circle cx={node.x + offsetX} cy={node.y + offsetY} r="14" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.7" />}
              <circle cx={node.x + offsetX} cy={node.y + offsetY} r="9" fill={player.color} stroke="#ffffff" strokeWidth="2" />
              <text x={node.x + offsetX} y={node.y + offsetY + 1} textAnchor="middle" dominantBaseline="middle" className="token-label">{player.name.slice(0, 1).toUpperCase()}</text>
            </g>
          );
        })}
      </svg>

      <div className="board-legend" aria-hidden="true">
        <span><i className="legend-wedge" /> Badge stop</span>
        <span><i className="legend-boost">↻</i> Roll again</span>
        <span><i className="legend-route" /> Available route</span>
      </div>
    </div>
  );
}
