const fs = require('fs');

function countStudents(path) {
  // Initialize an object to store the counts for each field
  const fieldCounts = {};

  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the file into lines and filter out empty lines and the header row
    const lines = data.split('\n').filter((line, index) => index > 0 && line.trim() !== '');

    // Loop through each line to count students in each field
    for (const line of lines) {
      const fields = line.split(',');
      const [firstName, , , field] = fields;

      if (field) {
        if (fieldCounts[field]) {
          fieldCounts[field].count += 1;
          fieldCounts[field].students.push(firstName);
        } else {
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
  } catch (error) {
    // Handle errors, such as file not found
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
