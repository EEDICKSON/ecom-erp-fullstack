const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');


// Create a database connection - > u can also  
// create a seperate file for this and then import/use that file

mongoose
    .connect(
        "mongodb+srv://edickson113:FaithJarba%402004@cluster0.d7hz2x4.mongodb.net/"
    )
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.log(error));


const app = express();
const PORT = process.env.PORT || 5000;


app.use(
    cors({
        origin: 'http://localhost:5173/',
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Express",
            "Pragma"
        ],
        credentials: true
    })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => console.log(`Server is now running on post ${PORT}`));