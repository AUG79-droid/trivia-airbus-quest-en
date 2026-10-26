import { describe, expect, it } from 'vitest';
import { CATEGORY_NAMES, CATEGORY_SHORT_NAMES } from '../game/board';
import { QUESTIONS, getRandomQuestion } from '../game/questions';

describe("Validate cross-functional curriculum", () => {
  it("Board keeps six categories and eight cases per category.", () => {
    expect(CATEGORY_NAMES).toHaveLength(6);
    expect(CATEGORY_SHORT_NAMES).toHaveLength(6);
    expect(QUESTIONS).toHaveLength(48);
    for (let category = 0; category < 6; category++) {
      expect(QUESTIONS.filter(item => item.category === category)).toHaveLength(8);
      expect(getRandomQuestion(category, [])).not.toBeNull();
    }
  });
  it("All questions have four alternatives, substantive explanations and a balanced answer index.", () => {
    const distribution = [0,0,0,0];
    for (const q of QUESTIONS) {
      expect(q.text.trim().length).toBeGreaterThan(24);
      expect(q.options).toHaveLength(4);
      expect(new Set(q.options).size).toBe(4);
      expect(q.correctIndex).toBeGreaterThanOrEqual(0);
      expect(q.correctIndex).toBeLessThan(4);
      distribution[q.correctIndex]++;
      expect(q.explanation.trim().length).toBeGreaterThan(90);
    }
    expect(distribution).toEqual([12,12,12,12]);
  });
  it("The 48 question identifiers are unique; obsolete nature categories are not reintroduced.", () => {
    expect(new Set(QUESTIONS.map(q => q.id)).size).toBe(48);
    expect(CATEGORY_NAMES.join(' | ').toLowerCase()).not.toMatch(/naturaleza|ecosistemas|\\bnature\\b|\\becosystems\\b/);
    for (let category=0; category<6; category++) {
      const used = QUESTIONS.filter(q => q.category === category).map(q => q.id);
      expect(getRandomQuestion(category, used)).not.toBeNull();
    }
  });
});
