const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require('cors');
const bodyParser = require("body-parser");
const router = require('./routes/router.js');
require('./config/db.js')


app.use([cors(), bodyParser.json(), bodyParser.urlencoded({ extended: false }), router]);

// heroku in production mode
if (process.env.NODE_ENV == 'production') {
    app.use(express.static("client/build"))
}



app.listen(PORT, () => {
    console.log(`localhost:${PORT}`);
})