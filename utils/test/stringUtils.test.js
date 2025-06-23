import { expect } from 'chai';
import { capitalize, reverseString, isPalindrome } from '../stringUtils';

describe('stringUtils', () => {
  describe('capitalize', () => {
    it('capitalizes the first letter', () => {
      expect(capitalize('hello')).to.equal('Hello');
    });

    it('throws if input is not string', () => {
      expect(() => capitalize(123)).to.throw('Input must be a string');
    });
  });

  describe('reverseString', () => {
    it('reverses a string', () => {
      expect(reverseString('abc')).to.equal('cba');
    });

    it('throws if input is not string', () => {
      expect(() => reverseString({})).to.throw('Input must be a string');
    });
  });

  describe('isPalindrome', () => {
    it('returns true for palindrome', () => {
      expect(isPalindrome('madam')).to.equal(true);
    });

    it('returns false for non-palindrome', () => {
      expect(isPalindrome('hello')).to.equal(false);
    });

    it('throws if input is not string', () => {
      expect(() => isPalindrome([])).to.throw('Input must be a string');
    });
  });
});
