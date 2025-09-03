const { readFile } = require('fs/promises');

async function countStudents(path) {
  try {
    const data = await readFile(path, 'utf8');
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

    console.log(`Number of students: ${linesCleaned.length}`);

    const uniqueFieldsArr = Array.from(new Set(fields));

    for (let i = 0; i < uniqueFieldsArr.length; i += 1) {
      const Ufield = uniqueFieldsArr[i];
      const selection = linesCleaned.filter((f) => (f[idxField] === Ufield));
      const students = selection.map((col) => (col[idxFirstname]));
      console.log(
        `Number of students in ${Ufield}: ${selection.length}. List: ${students.join(', ')}`,
      );
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
