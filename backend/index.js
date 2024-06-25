const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

// Veritabanı bağlantısı
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Database connected.');
})
.catch((err) => console.log('Database not connected!', err));


app.use(cors({
    credentials:true,
    origin: 'http://localhost:3000'
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/', require('./routes/authRoutes'));

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
