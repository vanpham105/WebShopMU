const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan'); //giúp logger request HTTP trên terminal
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
// const bodyParser = require('body-parser');
const route = require('./routes');
const db = require('./config/db');
// const jsonParser = bodyParser.json();

//connect db
db.connect();

const app = express();
const port = 3000;


//kiem tra file tinh
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.bodyParser());
app.use(express.urlencoded({
    extended: true

}));
app.use(express.json());

app.use(methodOverride('_method'));

//http log
app.use(morgan('combined'));

//temp
app.engine('hbs', engine({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//routes init
route(app);

app.listen(port, () => console.log(`app listening at http://localhost:${port}`))