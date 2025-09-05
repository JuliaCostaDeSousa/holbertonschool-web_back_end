import { readFile } from 'fs/promises';

export async function readDatabase(path) {
  try {
    const data = await readFile(path, 'utf8');
    const lines = data.trim().split('\n');
    const headerLine = lines[0].split(',');
    const idxFirstname = headerLine.indexOf('firstname');
    const idxField = headerLine.indexOf('field');

    const out = {};

    for (let i = 1; i < lines.length; i += 1) {
      const splitLine = lines[i].split(',');
      const firstname = splitLine[idxFirstname].trim();
      const field = splitLine[idxField].trim();
      if (!out[field]) {
        out[field] = [];
      }
      out[field].push(firstname);
    }

    return out;

  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
