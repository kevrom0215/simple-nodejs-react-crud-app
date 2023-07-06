const express = require('express');
const cors = require('cors');
const login = require('./routes/login')
const router = express.Router();
const app = express();


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    const message = 'Hello World!';
    res.status(200).send({message})
  });
app.get('*', (req,res) => {
  res.status(404).send("Invalid URL")
})


app.use("/",router)

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
