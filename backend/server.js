const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/message', (req, res) => {
  const message = 'Hello from the backend!';
  res.status(200).send({message})
});

app.get('/', (req, res) => {
    const message = 'Hello World!';
    res.status(200).send({message})
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
