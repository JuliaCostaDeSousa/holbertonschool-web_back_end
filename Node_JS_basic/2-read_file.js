function countStudents(path) {
  const fs = require('fs');
  let data;

  if (!fs.existsSync(database)) {
    throw new Error('Cannot load the database');
  } else {
    const lines = data.trim().split('\n');
    const headerLine = lines[0].split(',');
    const idxFirstname = headerLine.indexOf('firstname');
    const idxField = headerLine.indexOf('field');

    const linesCleaned = [];
    const fields = [];

    for (let i = 1; i < lines.length; i += 1) {
      const splitLine = lines[i].split(',');
      linesCleaned.push(splitLine);
      fields.push(splitLine[idxField].trim());
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
}
module.exports = countStudents;
