const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8000;

app.use(cors())
app.unsubscribe(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',require('./src/routes/'));

app.listen(port, () => console.log(`App listening on port ${port}`));