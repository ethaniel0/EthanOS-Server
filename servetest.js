const express = require('express');
const path = require('path');
const app = express();

app.use('/something', express.static(path.join(__dirname, 'wh2022dc', 'build')));

const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});