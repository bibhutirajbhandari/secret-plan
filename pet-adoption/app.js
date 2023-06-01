const express = require("express");
const Pets = require("./model/pets");
const connectdb = require("./db/connect");
require("dotenv").config();

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

async function start() {
  try {
    await connectdb(process.env.MONGO_URI);
    app.listen(port, console.log(`server running on port ${port}`));
  } catch (err) {
    console.log(err);
  }
}
start();

app.post("/pets", async (req, res) => {
  const task = await Pets.create(req.body);
  res.status(200).json({ task });
});

app.get("/pets", async (req, res) => {
  const context = req.body;

  const result = await Pets.findOne({
    state: context["state"],
    city: context["city"],
    breed: context["breed"],
  });

  if (!result) {
    return res.send(404).json({ message: "no records of such kind found!" });
  }

  res.status(200).json({ count: result.count });
});
