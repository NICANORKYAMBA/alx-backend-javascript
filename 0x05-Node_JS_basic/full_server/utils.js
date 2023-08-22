const fs = require('fs').promises;

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8')
      .then((data) => {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const studentData = {};

        lines.forEach((line) => {
          const [firstName, , , major] = line.split(',');
          if (major) {
            if (!studentData[major]) {
              studentData[major] = [];
            }
            studentData[major].push(firstName);
          }
        });

        resolve(studentData);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

module.exports = {
  readDatabase,
};
