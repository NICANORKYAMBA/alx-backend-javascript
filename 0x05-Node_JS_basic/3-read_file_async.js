const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        // Split the file into lines and filter out empty lines and the header row
        const lines = data.split('\n').filter((line, index) => index > 0 && line.trim() !== '');

        // Initialize an object to store the counts for each field
        const fieldCounts = {};

        // Loop through each line to count students in each field
        for (const line of lines) {
          const fields = line.split(',');
          const [firstName, , , field] = fields;

          if (field) {
            if (fieldCounts[field]) {
              fieldCounts[field].count += 1;
              fieldCounts[field].students.push(firstName);
            } else {
              // Initiialize count to 1 and students as an array with the first name
              fieldCounts[field] = {
                count: 1,
                students: [firstName],
              };
            }
          }
        }

        // Log the total number of students
        console.log(`Number of students: ${lines.length}`);

        // Log the counts for each field
        for (const field in fieldCounts) {
          if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
            const { count, students } = fieldCounts[field];
            console.log(`Number of students in ${field}: ${count}. List: ${students.join(', ')}`);
          }
        }

        resolve();
      }
    });
  });
}

module.exports = countStudents;
