import { describe, expect, it } from 'vitest';
import { ADJACENCY, NODES, findReachableEndpoints } from '../game/board';
import { QUESTIONS } from '../game/questions';
import { gameReducer, initialState } from '../hooks/useGameState';

describe('board', () => {
  it('keeps every connection bidirectional', () => {
    ADJACENCY.forEach((neighbors, from) => {
      neighbors.forEach((to) => expect(ADJACENCY[to]).toContain(from));
    });
  });

  it('creates routes with exactly the rolled distance', () => {
    for (let die = 1; die <= 6; die += 1) {
      const destinations = findReachableEndpoints(0, die);
      expect(Object.values(destinations).length).toBeGreaterThan(0);
      Object.values(destinations).forEach((path) => expect(path).toHaveLength(die + 1));
    }
  });

  it('contains six badge stops and one centre', () => {
    expect(NODES.filter((node) => node.type === 'wedge')).toHaveLength(6);
    expect(NODES.filter((node) => node.type === 'center')).toHaveLength(1);
  });
});

describe('questions', () => {
  it('provides eight learning questions per category', () => {
    for (let category = 0; category < 6; category += 1) {
      expect(QUESTIONS.filter((question) => question.category === category)).toHaveLength(8);
    }
  });

  it('gives every question a valid answer and explanation', () => {
    QUESTIONS.forEach((question) => {
      expect(question.options).toHaveLength(4);
      expect(question.correctIndex).toBeGreaterThanOrEqual(0);
      expect(question.correctIndex).toBeLessThan(question.options.length);
      expect(question.explanation.length).toBeGreaterThan(40);
    });
  });
});

describe('progression', () => {
  it('supports a solo game', () => {
    const state = gameReducer(initialState, { type: 'START_GAME', names: ['Learner'] });
    expect(state.phase).toBe('rolling');
    expect(state.players).toHaveLength(1);
    expect(state.players[0].wedges.every((wedge) => !wedge)).toBe(true);
  });
});
