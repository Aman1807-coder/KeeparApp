const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use( express.json());
app.use( express.urlencoded({ extended: false}));
app.use('/form', routes);

app.listen( 5000, () => {
    console.log('Listening to Port 5000');
});
