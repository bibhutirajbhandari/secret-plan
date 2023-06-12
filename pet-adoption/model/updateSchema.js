const mongoose = require("mongoose");
const existingSchema = require("../model/pets");

async function updateSchema() {
  try {
    const documents = await existingSchema.find();

    console.log(documents);
    //   for(const doc in documents){
    //   }
  } catch (err) {
    console.log("error: ", err);
  }
}

updateSchema();
