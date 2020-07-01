const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log(`Starting server`);
});
app.use(express.static('public'));