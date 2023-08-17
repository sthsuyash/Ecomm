const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(
    'http://localhost:5173',
    allowHeaders = ['Content-Type', 'Authorization'],
    exposeHeaders = ['Content-Type', 'Authorization']
));

const routes = require('./routes');
app.use('/api', routes);

app.get('/', (req, res) => {
    res.send('Hello from /');
});

// mongodb connection
const mongoose = require('mongoose');
const { DB, SERVER } = require('./constants');

mongoose.connect(`mongodb://${DB.DB_HOST}:${DB.DB_PORT}/${DB.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`[MongoDB]: connected on port ${DB.DB_PORT}`);

    // Start the server after MongoDB connection is established
    app.listen(SERVER.SERVER_PORT, () => {
        console.log(`[Server]: listening on port ${SERVER.SERVER_PORT}`);
    });
}).catch(err => {
    console.log(err);
});
