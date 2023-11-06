const connectToMongo = require('./db');
const express = require('express')
connectToMongo();

const app = express()
const port = 5000
var cors = require('cors');
const { contactRoutes } = require('./routes/contactRoutes');


app.use(cors()) // To allow browser to use api to make changes and solve cors error
app.use(express.json()) // when u want to use req.body then u need to have a middleware here these middleware is app.use i.e when u want to use console.log(req.body)


app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.use('/api/user', require('./routes/user'))
app.use('/api/contacts', contactRoutes);



app.listen(port, () => {
  console.log(`Notebook app listening on port ${port}`)
})