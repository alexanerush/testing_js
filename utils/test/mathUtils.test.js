import { expect } from 'chai';
import {
  add, subtract, multiply, divide,
} from '../mathUtils';

describe('mathUtils', () => {
  it('adds two numbers', () => {
    expect(add(2, 3)).to.equal(5);
  });

  it('subtracts two numbers', () => {
    expect(subtract(5, 2)).to.equal(3);
  });

  it('multiplies two numbers', () => {
    expect(multiply(4, 2)).to.equal(8);
  });

  it('divides two numbers', () => {
    expect(divide(10, 2)).to.equal(5);
  });

  it('throws error when dividing by 0', () => {
    expect(() => divide(10, 0)).to.throw('Cannot divide by zero');
  });
});
