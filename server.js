require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static', express.static(__dirname + '/client'));

app.listen(process.env.PORT || 8080, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});
