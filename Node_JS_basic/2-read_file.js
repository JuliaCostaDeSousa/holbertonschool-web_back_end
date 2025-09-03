function countStudents(path) {
  const fs = require('fs');
  const fields = [];
  let data;

  try {
    data = fs.readFileSync(path, 'utf8');
  } catch {
    throw new Error('Cannot load the database');
  }
  const lines = data.split('\n');
  const headerLine = lines[0].split(',').map(h => h.trim());
  const idxFirstname = headerLine.indexOf('firstname');
  const idxField = headerLine.indexOf('field');

  if (idxField < 0 || idxFirstname < 0) {
   console.log('Number of students: 0');
   return;
  }

  let linesCleaned = [];

  for (const element of lines.slice(1)) {
    if ((element) && element.trim() !== '') {
      let splitLine = element.split(',').map(s => s.trim());
      if (splitLine[idxFirstname].trim() !== '' && splitLine[idxField].trim() !== '') {
        linesCleaned.push(splitLine);
        fields.push(splitLine[idxField].trim());
      }
    }
  }
  console.log(`Number of students: ${linesCleaned.length}`);
  const uniqueFields = new Set(fields);

  for (const Ufield of uniqueFields) {
    const selection = linesCleaned.filter(f => f[idxField] === Ufield);
    const students = selection.map(col => col[idxFirstname]);
    console.log(
        `Number of students in ${Ufield}: ${selection.length}. List: ${students.join(', ')}`);
  }
}
module.exports = countStudents;
