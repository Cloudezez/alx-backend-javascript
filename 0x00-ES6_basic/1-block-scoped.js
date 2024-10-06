export default function taskBlock(trueOrFalse) {
  const task = false;  // Use const here because the value shouldn't change outside the block
  const task2 = true;  // Same reasoning, values outside shouldn't be modified

  if (trueOrFalse) {
    let task = true;  // Use let for block-scoped variables inside the block
    let task2 = false;  // These values are now specific to this block and won't affect the outer scope
  }

  return [task, task2];  // Return the values of the variables declared outside the block
}

