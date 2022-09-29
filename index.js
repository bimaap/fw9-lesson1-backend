const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8000;

app.use(cors())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.unsubscribe(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/',require('./src/routes/'));

app.listen(port, () => console.log(`App listening on port ${port}`));