import { expect } from 'chai';
import checkStudentKnowledge from '../studentKnowledgeCheckerUtil';

describe('studentKnowledgeCheckerUtil', () => {
  it('returns true if answers match', () => {
    const student = { q1: 'a', q2: 'b' };
    const correct = { q1: 'a', q2: 'b' };
    return expect(checkStudentKnowledge(student, correct)).to.be.true;
  });

  it('returns false if answers don’t match', () => {
    const student = { q1: 'a', q2: 'c' };
    const correct = { q1: 'a', q2: 'b' };
    return expect(checkStudentKnowledge(student, correct)).to.be.false;
  });

  it('returns false if keys don’t match', () => {
    const student = { q1: 'a' };
    const correct = { q1: 'a', q2: 'b' };
    return expect(checkStudentKnowledge(student, correct)).to.be.false;
  });
});
