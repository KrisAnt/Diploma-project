/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/Task_2/tests/*.spec.ts"],
  testTimeout: 5000 * 60 * 3,
};
