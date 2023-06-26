const fs = require('fs');

// Get the command-line arguments
const args = process.argv.slice(2); // Exclude the first two arguments (node and script filename)

// Check if a file argument is provided
if (args.length > 0) {
  const filename = args[0];
  // Read the contents of the file
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`);
      return;
    }
    try {
      // Execute the contents of the file as a module
      const result = require(filename);
      console.log(result);
    } catch (error) {
      console.error(`Error executing file: ${error}`);
    }
  });
} else {
  // No file argument provided, handle accordingly
  console.log('Running default development environment');
}
