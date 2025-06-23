export function filterUsersByAge(users, minAge, maxAge) {
  if (!Array.isArray(users)) {
    throw new Error('Users must be an array');
  }
  return users.filter((user) => user.age >= minAge && user.age <= maxAge);
}

export function sortUsersByName(users) {
  if (!Array.isArray(users)) {
    throw new Error('Users must be an array');
  }
  return [...users].sort((a, b) => a.name.localeCompare(b.name));
}

export function findUserById(users, id) {
  if (!Array.isArray(users)) {
    throw new Error('Users must be an array');
  }
  if (typeof id !== 'number') {
    throw new Error('ID must be a number');
  }
  return users.find((user) => user.id === id) || null;
}

export function isEmailTaken(users, email) {
  if (!Array.isArray(users)) {
    throw new Error('Users must be an array');
  }
  if (typeof email !== 'string') {
    throw new Error('Email must be a string');
  }
  return users.some((user) => user.email === email);
}
