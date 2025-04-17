import { expect } from 'chai';
import { findMax, findMin, removeDuplicates } from '../arrayUtils.js';

describe('arrayUtils', () => {
  describe('findMax', () => {
    it('returns the max number', () => {
      expect(findMax([1, 5, 3])).to.equal(5);
    });
    it('throws error if input is not array', () => {
      expect(() => findMax(123)).to.throw("Input must be an array");
    });
  });

  describe('findMin', () => {
    it('returns the min number', () => {
      expect(findMin([1, 5, 3])).to.equal(1);
    });
    it('throws error if input is not array', () => {
      expect(() => findMin("test")).to.throw("Input must be an array");
    });
  });

  describe('removeDuplicates', () => {
    it('removes duplicates', () => {
      expect(removeDuplicates([1, 2, 2, 3])).to.deep.equal([1, 2, 3]);
    });
    it('throws error if input is not array', () => {
      expect(() => removeDuplicates(null)).to.throw("Input must be an array");
    });
  });
});
