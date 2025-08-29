export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch ({name, message}) {
    queue.push(`${name}: ${message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
