import { describe, expect, it } from 'vitest';
import { CLIMATE_QUESTIONS, CLIMATE_NAMES, CLIMATE_SHORT_NAMES } from '../game/climate';
import { GENERAL_QUESTIONS, getRandomQuestion, shuffleAnswers, rememberQuestion } from '../game/questions';
import { gameReducer, initialState } from '../hooks/useGameState';
describe('Expanded curriculum',()=>{
  it('keeps 180 questions in each edition, with 30 per category and unique IDs and prompts',()=>{
    expect(CLIMATE_NAMES).toHaveLength(6);expect(CLIMATE_SHORT_NAMES).toHaveLength(6);
    expect(new Set([...GENERAL_QUESTIONS,...CLIMATE_QUESTIONS].map(q=>q.id)).size).toBe(360);
    for(const bank of [GENERAL_QUESTIONS,CLIMATE_QUESTIONS]){
      expect(bank).toHaveLength(180);expect(new Set(bank.map(q=>q.text)).size).toBe(180);
      const counts=[0,0,0,0];
      for(let c=0;c<6;c++){const category=bank.filter(q=>q.category===c);expect(category).toHaveLength(30);for(const level of ['foundation','applied','advanced'])expect(category.filter(q=>q.difficulty===level)).toHaveLength(10);}
      for(const q of bank){expect(new Set(q.options).size).toBe(4);expect(q.correctIndex).toBeGreaterThanOrEqual(0);expect(q.correctIndex).toBeLessThan(4);expect(q.explanation.length).toBeGreaterThan(90);counts[q.correctIndex]++;}
      expect(counts).toEqual([45,45,45,45]);
    }
  });
  it('avoids repeats within a category until all 30 are answered',()=>{
    for(let c=0;c<6;c++){const used:number[]=[];for(let i=0;i<30;i++){const q=getRandomQuestion(c,used)!;expect(used).not.toContain(q.id);used.push(q.id);}expect(getRandomQuestion(c,used)).not.toBeNull();}
  });
  it('prioritises unseen questions across games and uses oldest when exhausted',()=>{
    const ids=GENERAL_QUESTIONS.filter(q=>q.category===0).map(q=>q.id);
    const seen=ids.slice(0,-1);expect(getRandomQuestion(0,[],seen)?.id).toBe(ids[29]);expect(getRandomQuestion(0,[],ids)?.id).toBe(ids[0]);expect(getRandomQuestion(0,[ids[0]],ids)?.id).toBe(ids[1]);expect(rememberQuestion([1,2,3],1)).toEqual([2,3,1]);
  });
  it('shuffles options without changing the correct answer or original question',()=>{
    const q=GENERAL_QUESTIONS[0],before=[...q.options];
    for(const random of [()=>0,()=>0.99,()=>0.4]){const shuffled=shuffleAnswers(q,random);expect(shuffled.options[shuffled.correctIndex]).toBe(q.options[q.correctIndex]);expect(new Set(shuffled.options)).toEqual(new Set(q.options));}
    expect(q.options).toEqual(before);expect(shuffleAnswers(q,()=>0).options).not.toEqual(before);
  });
  it('retains history on new game and reset',()=>{
    const state=gameReducer(initialState,{type:'START_GAME',names:['QA'],history:[1,2]});expect(state.questionHistory).toEqual([1,2]);expect(state.usedQuestionIds).toEqual([]);expect(gameReducer(state,{type:'RESET'}).questionHistory).toEqual([1,2]);
  });
});
