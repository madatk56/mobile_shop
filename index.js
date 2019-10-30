const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config();
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))
const router = require('./src/router/index');

const port = process.env.port || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
router(app);

app.listen(port, () => {

     console.log('application running on port ', port);
})
