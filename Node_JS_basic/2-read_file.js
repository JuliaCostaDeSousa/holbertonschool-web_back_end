function countStudents(path) {
  const fs = require('fs');
  const fields = [];
  let data;

  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  const lines = data.split(/\r?\n/);
  if (lines.length === 0) {
    process.stdout.write('Number of students: 0\n');
    return;
  }
  const headerLine = lines[0].split(',').map(h => h.trim());
  const idxFirstname = headerLine.indexOf('firstname');
  const idxField = headerLine.indexOf('field');

  if (idxField < 0 || idxFirstname < 0) {
   process.stdout.write('Number of students: 0\n');
   return;
  }

  let linesCleaned = [];

  for (let i = 1; i < lines.length; i += 1) {
    const element = lines[i];
    if (!element || element.trim() === '') continue;
    const splitLine = element.split(',').map(s => s.trim());
    if (splitLine.length !== headerLine.length) continue;

    if (splitLine[idxFirstname] !== '' && splitLine[idxField] !== '') {
      linesCleaned.push(splitLine);
      fields.push(splitLine[idxField].trim());
    }
  }
  process.stdout.write(`Number of students: ${linesCleaned.length}\n`);
  const uniqueFieldsArr = Array.from(new Set(fields));

  for (let i = 0; i < uniqueFieldsArr.length; i += 1) {
    const Ufield = uniqueFieldsArr[i];
    const selection = linesCleaned.filter(f => f[idxField] === Ufield);
    const students = selection.map(col => col[idxFirstname]);
    process.stdout.write(
        `Number of students in ${Ufield}: ${selection.length}. List: ${students.join(', ')}\n`);
  }
}
module.exports = countStudents;
