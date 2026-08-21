import { BoardNode } from './types';

export const CX = 300;
export const CY = 300;
export const RING_R = 220;
const SPOKE_RADII = [75, 130, 175];

export const CATEGORY_COLORS = [
  '#38bdf8',
  '#34d399',
  '#fb7185',
  '#fbbf24',
  '#a78bfa',
  '#22d3ee',
];

export const CATEGORY_NAMES = [
  'Nature',
  'Ecosystems',
  'Footprint & risks',
  'Mitigation',
  'Measurement',
  'Airbus operations',
];

export const CATEGORY_SHORT_NAMES = [
  'Nature',
  'Ecosystems',
  'Risks',
  'Mitigation',
  'Measurement',
  'Airbus',
];

export const PLAYER_COLORS = ['#f97316', '#e879f9', '#84cc16', '#facc15'];

function degToRad(degrees: number) {
  return (degrees * Math.PI) / 180;
}

export function spokeAngleDeg(index: number) {
  return index * 60 - 90;
}

function buildNodes(): BoardNode[] {
  const nodes: BoardNode[] = [
    { id: 0, type: 'center', category: null, x: CX, y: CY },
  ];

  for (let category = 0; category < 6; category += 1) {
    const angle = degToRad(spokeAngleDeg(category));
    SPOKE_RADII.forEach((radius, index) => {
      nodes.push({
        id: 1 + category * 3 + index,
        type: 'normal',
        category,
        x: CX + radius * Math.cos(angle),
        y: CY + radius * Math.sin(angle),
      });
    });
  }

  for (let category = 0; category < 6; category += 1) {
    const angle = degToRad(spokeAngleDeg(category));
    nodes.push({
      id: 19 + category,
      type: 'wedge',
      category,
      x: CX + RING_R * Math.cos(angle),
      y: CY + RING_R * Math.sin(angle),
    });
  }

  for (let segment = 0; segment < 6; segment += 1) {
    const startAngle = spokeAngleDeg(segment);
    for (let index = 0; index < 3; index += 1) {
      const angle = degToRad(startAngle + ((index + 1) / 4) * 60);
      const rollAgain = index === 1;
      nodes.push({
        id: 25 + segment * 3 + index,
        type: rollAgain ? 'rollAgain' : 'normal',
        category: rollAgain ? null : index === 0 ? segment : (segment + 1) % 6,
        x: CX + RING_R * Math.cos(angle),
        y: CY + RING_R * Math.sin(angle),
      });
    }
  }

  return nodes;
}

function buildAdjacency(): number[][] {
  const adjacency: number[][] = Array.from({ length: 43 }, () => []);
  const connect = (from: number, to: number) => {
    adjacency[from].push(to);
    adjacency[to].push(from);
  };

  for (let spoke = 0; spoke < 6; spoke += 1) {
    connect(0, 1 + spoke * 3);
    connect(1 + spoke * 3, 2 + spoke * 3);
    connect(2 + spoke * 3, 3 + spoke * 3);
    connect(3 + spoke * 3, 19 + spoke);
  }

  for (let segment = 0; segment < 6; segment += 1) {
    connect(19 + segment, 25 + segment * 3);
    connect(25 + segment * 3, 26 + segment * 3);
    connect(26 + segment * 3, 27 + segment * 3);
    connect(27 + segment * 3, 19 + ((segment + 1) % 6));
  }

  return adjacency;
}

export const NODES = buildNodes();
export const ADJACENCY = buildAdjacency();

export function findReachableEndpoints(start: number, steps: number): Record<number, number[]> {
  const endpoints: Record<number, number[]> = {};

  function walk(node: number, previous: number, remaining: number, path: number[]) {
    if (remaining === 0) {
      if (!endpoints[node]) endpoints[node] = path;
      return;
    }

    ADJACENCY[node].forEach((next) => {
      if (next !== previous) walk(next, node, remaining - 1, [...path, next]);
    });
  }

  walk(start, -1, steps, [start]);
  return endpoints;
}

export function describeNode(node: BoardNode) {
  if (node.type === 'center') return 'Mission centre';
  if (node.type === 'rollAgain') return 'Boost: roll again';
  if (node.type === 'wedge') return `Badge stop: ${CATEGORY_NAMES[node.category!]}`;
  return CATEGORY_NAMES[node.category!];
}
