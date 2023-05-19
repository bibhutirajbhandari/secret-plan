const minimist = require("minimist");
const fs = require("fs");

const command = minimist(process.argv.slice(2));

//overwrite/write to a File
function overwrite(newData) {
  fs.writeFile("text.txt", newData, (err) => {
    if (err) {
      console.log("Error: ", err);
    }
  });
}

//write to a file
if (command.write) {
  let content = command.write;

  fs.appendFile("text.txt", "\n" + content, (err) => {
    if (err) {
      console.log("Error: ", err);
    } else {
      console.log("content written");
    }
  });
}

//read from a file
if (command.read) {
  fs.readFile("text.txt", (err, content) => {
    if (err) {
      console.log("Error: No content present to read");
    } else {
      console.log(content.toString());
    }
  });
}

//remove a line from text file
if (command.deletenote) {
  const todelete = command.deletenote;

  fs.readFile("text.txt", (err, data) => {
    const str = data.toString();
    console.log(str);
    if (!err) {
      let lines = data.toString().split("\n");
      lines.forEach((element, index) => {
        if (element == todelete) {
          lines.splice(index, 1);
          let newData = lines.join("\n");
          overwrite(newData);
        }
      });
    } else {
      console.log("error:", err);
    }
  });
}

//update a line in text file
if (command.update) {
  let toupdate = command.update;
  let content = command.content;

  const data = fs.readFileSync("text.txt", "UTF-8");

  const newVal = data.replace(new RegExp(toupdate), content);
  fs.writeFileSync("text.txt", newVal, "UTF-8");
  console.log(newVal);
}

//delete the file
if (command.deletefile) {
  const filePath = command.deletefile; //provide path of file to delete

  fs.unlink(filePath, (err) => {
    if (err) {
      console.log("error in file deletion");
    } else {
      console.log(`file ${filePath} is deleted successfully`);
    }
  });
}
