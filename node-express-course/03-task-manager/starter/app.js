const express = require("express");
const tasks = require("./routes/tasks");

const app = express();

app.listen(3000, () => {
  console.log(`server up on port 3000`);
});

app.get("/hello", (req, res) => {
  console.log(req.body);
  res.send("Task Manager");
});

app.use("/api/v1/tasks", tasks);

app.use(express.json()); //your application is using json() method of Express to get data in json format
// app.use(tasks);
