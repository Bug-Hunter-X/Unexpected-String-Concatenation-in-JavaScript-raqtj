# Unexpected String Concatenation in JavaScript

This repository demonstrates a common JavaScript bug caused by the language's loose typing system.  When performing arithmetic operations with different data types (e.g., numbers and strings), JavaScript might unexpectedly perform string concatenation instead of numerical addition. This can lead to incorrect results and difficult-to-debug errors.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version.  The README explains the problem and its solution.

## How to Reproduce

1. Clone the repository.
2. Open `bug.js` and run it using a JavaScript interpreter (e.g., Node.js).  Note the unexpected output.
3. Open `bugSolution.js` to see the corrected code and expected output.

## Solution

The solution involves explicit type checking and conversion before performing arithmetic operations. This ensures that all operands are of the same numeric type, preventing unintended string concatenation.