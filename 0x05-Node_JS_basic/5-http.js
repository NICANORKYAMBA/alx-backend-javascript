const http = require('http');
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
              // Initialize count to 1 and students as an array with the first name
              fieldCounts[field] = {
                count: 1,
                students: [firstName],
              };
            }
          }
        }

        resolve(fieldCounts);
      }
    });
  });
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const databaseFileName = process.argv[2];
    if (!databaseFileName) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error: Database file not provided.');
      return;
    }

    countStudents(databaseFileName)
      .then((fieldCounts) => {
        const response = `This is the list of our students\nNumber of students: ${
          fieldCounts ? fieldCounts.CS.count + fieldCounts.SWE.count : 0
        }\nNumber of students in CS: ${
          fieldCounts ? fieldCounts.CS.count : 0
        }. List: ${fieldCounts ? fieldCounts.CS.students.join(', ') : ''}\nNumber of students in SWE: ${
          fieldCounts ? fieldCounts.SWE.count : 0
        }. List: ${fieldCounts ? fieldCounts.SWE.students.join(', ') : ''}`;

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(response);
      })
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`Internal Server Error: ${error.message}`);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
