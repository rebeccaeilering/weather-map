const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log(`Starting server`);
});
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('./views/index.html', { root: __dirname});
})