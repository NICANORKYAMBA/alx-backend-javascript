const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
  try {
    const studentData = await readDatabase(req.dbPath);
    const majors = Object.keys(studentData).sort((a, b) => a.localeCompare(b));

    let response = 'This is the list of our students\n';

    for (const major of majors) {
      const students = studentData[major];
      if (students.length > 0) {
        response += `Number of students in ${major}: ${students.length}. List: ${students.join(', ')}\n`;
      }
    }

    res.status(200).send(response.trim()); // Use trim() to remove the trailing newline
  } catch (error) {
    res.status(500).send(`Cannot load the database: ${error.message}\n`);
  }
}

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major.toUpperCase();

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const studentData = await readDatabase(req.dbPath);
      const students = studentData[major] || [];

      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      res.status(500).send(`Cannot load the database: ${error.message}`);
    }
  }
}

module.exports = StudentsController;
