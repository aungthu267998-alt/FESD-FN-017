import { User } from './user';

console.log('--- STARTING UNIT TESTS FOR getAge() ---');

const testCases = [
  { id: 'TC-01', desc: 'Birthday has passed this year', dob: '1990-01-01', expected: 34 },
  { id: 'TC-02', desc: 'Today is the birthday', dob: '1990-05-20', expected: 34 },
  { id: 'TC-03', desc: 'Birthday has not yet arrived', dob: '1990-12-31', expected: 33 },
  { id: 'TC-04', desc: 'Newborn (Born today)', dob: '2024-05-20', expected: 0 },
  { id: 'TC-05', desc: 'Leap Year Birthday', dob: '2000-02-29', expected: 24 },
  { id: 'TC-06', desc: 'Future Date (Invalid)', dob: '2025-01-01', expectedError: 'Future Date' },
  { id: 'TC-07', desc: 'Incorrect Date Format', dob: '31/02/1990', expectedError: 'Incorrect Date Format' },
  { id: 'TC-08', desc: 'Null or Undefined Value', dob: null, expectedError: 'Null or Undefined Value' },
  { id: 'TC-09', desc: 'Maximum Lifespan (Edge)', dob: '1900-01-01', expected: 124 },
  { id: 'TC-10', desc: 'Monthly Boundary', dob: '1990-05-21', expected: 33 },
];

let passedCount = 0;

testCases.forEach((tc) => {
  try {
    const user = new User({ dateOfBirth: tc.dob });
    const result = user.getAge();
    if (result === tc.expected) {
      console.log(`✅ ${tc.id}: PASSED - ${tc.desc}`);
      passedCount++;
    } else {
      console.error(`❌ ${tc.id}: FAILED - Expected ${tc.expected}, got ${result}`);
    }
  } catch (err: any) {
    if (tc.expectedError && err.message === tc.expectedError) {
      console.log(`✅ ${tc.id}: PASSED (Caught Expected Error: "${err.message}") - ${tc.desc}`);
      passedCount++;
    } else {
      console.error(`❌ ${tc.id}: FAILED - Unexpected error: ${err.message}`);
    }
  }
});

console.log(`\n--- TEST SUMMARY: ${passedCount}/${testCases.length} PASSED ---`);