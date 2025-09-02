function countStudents(path) {
  const fs = require("fs");
  const csv = require('csv-parser');
  const results = [];
  const fields = [];
  const firstnames = [];

  try {
    fs.createReadStream(path)
    data = fs.readFileSync(path, 'utf8');
    data.split('\n').trim();
    console.log(data);
    /*
        .pipe(csv())
        .on('data', (row) => {
          if (Object.values(row).toString() !== "") {
            if (row.field !== "" && row.firstname !== "" ) {
              results.push(row);
              fields.push(row.field);
              firstnames.push(row.firstname);
            }
          }
        })
        .on("error", () => {
            throw new Error('Cannot load the database');
        })
        .on('end', () => {
        studentsNB = results.length;
        for (element of set(fields)) {
          console.log(results.filter(((element) => {
            element === results.field;
            return results.firstname;
          })));
        }
        console.log(studentsNB);
        console.log(results);
        console.log(fields);
        console.log(firstnames);
        });
        */
  } catch {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
