function numofmatchsticks(step) {
  if (step === 1) {
    return 6;
  }
  const subtractBy = step - 1;
  const count = 6 * step - subtractBy;

  return count;
}
console.log(numofmatchsticks(87));
