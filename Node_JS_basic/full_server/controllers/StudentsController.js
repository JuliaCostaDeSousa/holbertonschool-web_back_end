import readDatabase from '../utils';

export default class StudentsController {
  static async getAllStudents(request, response) {
    const path = process.argv[2];
    try {
      const out = await readDatabase(path);
      const fields = Object.keys(out);
      const sortedFields = fields.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
      const text = ['This is the list of our students'];
      for (const field of sortedFields) {
        const firstnames = out[field];
        text.push(`Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`);
      }
      response.status(200);
      response.send(text.join('\n'));
    } catch (error) {
      response.status(500);
      response.send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const param = request.params.major;
    if (param !== 'CS' && param !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    const path = process.argv[2];
    try {
      const out = await readDatabase(path);
      const fieldFirstnames = out[param];
      response.status(200);
      response.send(`List: ${fieldFirstnames.join(', ')}`);
    } catch (error) {
      response.status(500);
      response.send('Cannot load the database');
    }
  }
}
