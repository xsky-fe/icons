const fs = require('fs');

fs.readdir('./src/Icons', 'utf8', (err, data) => {
  console.log(err, data);
})
