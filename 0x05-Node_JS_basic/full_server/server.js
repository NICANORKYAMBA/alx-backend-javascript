const express = require('express');

const app = express();

const routes = require('./routes');

// Set the database file path from command line argument
const dbPath = process.argv[2];

if (!dbPath) {
  console.error('Database file path is missing. Please provide it as a command line argument.');
  process.exit(1);
}

app.use((req, res, next) => {
  req.dbPath = dbPath;
  next();
});

app.use(express.json()); // For parsing JSON data
app.use(express.urlencoded({ extended: true })); // For parsing URL-encoded data

app.use('/', routes);

const port = 1245;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
