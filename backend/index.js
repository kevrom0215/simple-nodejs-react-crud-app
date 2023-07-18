const express = require('express');
const cors = require('cors');
const login = require('./routes/login')
const items = require('./routes/items')
const order = require('./routes/order')
const router = express.Router();
const app = express();


app.use(cors());
app.use(express.json());

app.use("/items",items)
app.use("/login",login)
app.use("/order",order)



app.get('/', (req, res) => {
    const message = 'Hello World!';
    res.status(200).send({message})
  });
app.get('*', (req,res) => {
  res.status(404).send("Invalid URL")
})



const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
