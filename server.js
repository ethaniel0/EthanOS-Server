const express = require('express');
const path = require('path');
const app = express();

app.use('/wh2022dc', express.static(path.join(__dirname, 'wh2022dc', 'build')));
app.use('/present', express.static(path.join(__dirname, 'present', 'build')));
app.use('/', express.static(path.join(__dirname, 'ethanos', 'build')));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});