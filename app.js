const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const twitter = require('./routes/twitter');
const port = 8000;
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use('/api', twitter);
app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, () => {
  console.log(`Application is listening at port ${port}: http://localhost:${port}`);
});
