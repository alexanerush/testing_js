/**
 * Compares student's answers to correct ones.
 * @param {Object} studentAnswers - { question1: answer1, ... }.
 * @param {Object} correctAnswers - Same format as studentAnswers.
 * @returns {boolean} True if all answers match, otherwise false.
 */
function checkStudentKnowledge(studentAnswers, correctAnswers) {
  if (
    typeof studentAnswers !== 'object'
    || typeof correctAnswers !== 'object'
  ) {
    throw new Error('Both arguments must be objects');
  }

  const studentKeys = Object.keys(studentAnswers).sort();
  const correctKeys = Object.keys(correctAnswers).sort();

  if (studentKeys.length !== correctKeys.length) return false;

  const keysMatch = studentKeys.every((key, i) => key === correctKeys[i]);
  if (!keysMatch) return false;

  return studentKeys.every(
    (key) => studentAnswers[key] === correctAnswers[key],
  );
}

export default checkStudentKnowledge;
