const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use('/',require('./src/routes/'));

app.listen(port, () => console.log(`App listening on port ${port}`));