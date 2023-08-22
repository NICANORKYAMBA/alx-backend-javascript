const express = require('express');
const fs = require('fs').promises;

// Create an Express application
const app = express();

// Define a route for the root endpoint "/"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define a route for the "/students" endpoint
app.get('/students', async (req, res) => {
  try {
    // Get the database file name from command line arguments
    const databaseFileName = process.argv[2];

    if (!databaseFileName) {
      res.status(500).send('Internal Server Error: Database file not provided.');
      return;
    }

    // Read the database file asynchronously
    const data = await fs.readFile(databaseFileName, 'utf8');

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
          // Initialize count to 1 and students as an array with the first name
          fieldCounts[field] = {
            count: 1,
            students: [firstName],
          };
        }
      }
    }

    // Prepare the response
    let response = 'This is the list of our students\n';

    // Log the total number of students
    response += `Number of students: ${lines.length}\n`;

    // Log the counts for each field
    for (const field in fieldCounts) {
      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        const { count, students } = fieldCounts[field];
        response += `Number of students in ${field}: ${count}. List: ${students.join(', ')}\n`;
      }
    }

    // Send the response without a newline character at the end
    res.send(response.trim());
  } catch (error) {
    res.status(500).send(`Internal Server Error: ${error.message}\n`);
  }
});

// Start the HTTP server and listen on port 1245
const port = 1245;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Export the Express app
module.exports = app;
