console.log('Welcome to Holberton School, what is your name?');
process.stdin.setEncoding('utf8');

let printed = false;

process.stdin.on('data', (chunk) => {
  if (printed) return;
  const name = String(chunk).trim();
  console.log(`Your name is: ${name}`);
  printed = true;
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});

process.on('SIGINT', () => {
  console.log('This important software is now closing');
  process.exit(0);
});