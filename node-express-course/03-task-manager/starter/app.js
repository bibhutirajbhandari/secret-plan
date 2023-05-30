const express = require("express");
const tasks = require("./routes/tasks");
const connectdb = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");
require("dotenv").config();

const app = express();

app.use(express.json()); //your application is using json() method of Express to get data in json format
app.use(express.static("./public"));

app.use("/api/v1/", tasks);

app.use(notFound);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

async function start() {
  try {
    await connectdb(process.env.MONGO_URI);
    app.listen(port, console.log(`server listening to port ${port}`));
  } catch (err) {
    console.log(err);
  }
}

start();
