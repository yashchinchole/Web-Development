const fs = require("fs");

// fs.writeFile("r.txt", "Yash Chinchole", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });

fs.readFile("./r.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
