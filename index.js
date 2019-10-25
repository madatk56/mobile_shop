const app = require('express')();
const bodyParser = require('body-parser');
const directory = require('./src/config/api');
const router = require('./src/router/index');

const port = process.env.port || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router(app);

app.listen(port, () => {
     console.log('application running on port ', port);
})
