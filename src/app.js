import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
var productRouter = require('../router/productRouter')
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/products', productRouter);  

app.get('/', (req, res) => {
    res.send("<h1>Home Page</h1>");
});




const mongodbURL = 'mongodb+srv://datt:datt@cluster0.mx8euqx.mongodb.net/datt'
mongoose.connect(mongodbURL, { useUnifiedTopology: true, useNewUrlParser: true})
const dbConnect = mongoose.connection
dbConnect.on('error', () => console.log('Mongo DB Connection Failed'))
dbConnect.on('connected', () => console.log('Mongo DB Connection Successfull'))

const PORT = 8000
app.listen(PORT, () => console.log(`Server running port ${PORT}`))