import { expect } from 'chai';
import { filterUsersByAge, sortUsersByName, findUserById, isEmailTaken } from '../usersListUtils.js';

const users = [
  { id: 1, name: 'Alice', age: 20, email: 'alice@example.com' },
  { id: 2, name: 'Bob', age: 25, email: 'bob@example.com' },
  { id: 3, name: 'Charlie', age: 30, email: 'charlie@example.com' }
];

describe('usersListUtils', () => {
  describe('filterUsersByAge', () => {
    it('filters users by age', () => {
      const result = filterUsersByAge(users, 21, 29);
      expect(result).to.deep.equal([users[1]]);
    });
  });

  describe('sortUsersByName', () => {
    it('sorts users alphabetically', () => {
      const sorted = sortUsersByName(users);
      expect(sorted.map(u => u.name)).to.deep.equal(['Alice', 'Bob', 'Charlie']);
    });
  });

  describe('findUserById', () => {
    it('finds user by id', () => {
      expect(findUserById(users, 2)).to.deep.equal(users[1]);
    });

    it('returns null if user not found', () => {
      expect(findUserById(users, 999)).to.be.null;
    });
  });

  describe('isEmailTaken', () => {
    it('returns true if email is taken', () => {
      expect(isEmailTaken(users, 'alice@example.com')).to.be.true;
    });

    it('returns false if email is not taken', () => {
      expect(isEmailTaken(users, 'nobody@nowhere.com')).to.be.false;
    });
  });
});
