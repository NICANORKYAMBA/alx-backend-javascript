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

        // Resolve with the fieldCounts object
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
        const csCount = fieldCounts.CS ? fieldCounts.CS.count : 0;
        const sweCount = fieldCounts.SWE ? fieldCounts.SWE.count : 0;
        const csStudents = fieldCounts.CS ? fieldCounts.CS.students.join(', ') : '';
        const sweStudents = fieldCounts.SWE ? fieldCounts.SWE.students.join(', ') : '';

        const response = `This is the list of our students\nNumber of students: ${
          csCount + sweCount
        }\nNumber of students in CS: ${csCount}. List: ${csStudents}\nNumber of students in SWE: ${sweCount}. List: ${sweStudents}`;

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(response);
      })
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`Internal Server Error: ${error.message}\n`);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
