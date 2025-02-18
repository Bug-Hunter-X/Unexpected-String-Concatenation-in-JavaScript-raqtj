function foo(a, b) {
  // Type checking and conversion
  a = Number(a);
  b = Number(b);

  if (isNaN(a) || isNaN(b)) {
    return 'Invalid input: Operands must be numbers';
  }

  return a + b;
}

console.log(foo(1, '2')); // Output: 3 (correct numerical addition)
console.log(foo('abc', 2)); //Output: Invalid input: Operands must be numbers