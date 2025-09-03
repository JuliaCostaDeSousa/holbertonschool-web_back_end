const { readFile } = require('fs/promises');
const express = require('express');

const dbPath = process.argv[2];

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

    let out = `Number of students: ${linesCleaned.length}\n`;

    const uniqueFieldsArr = Array.from(new Set(fields));
    for (let i = 0; i < uniqueFieldsArr.length; i += 1) {
      const Ufield = uniqueFieldsArr[i];
      const selection = linesCleaned.filter((f) => (f[idxField] === Ufield));
      const students = selection.map((col) => (col[idxFirstname]));
      out += `Number of students in ${Ufield}: ${selection.length}. List: ${students.join(', ')}\n`;
    }
    return out;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const app = express();

app.get('/', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('Hello Holberton School!');
});
app.get('/students', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  try {
    res.write('This is the list of our students\n');
    const out = await countStudents(dbPath);
    res.end(out);
    return;
  } catch (error) {
    res.end('Cannot load the database');
  }
});

if (require.main === module) {
  app.listen(1245);
}

module.exports = app;
