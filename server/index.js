const express = require('express');
const app = express();

app.get('/other-service',  (req, res) => {
  res.send('Hello World!')
});

const PORT = 8009;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
