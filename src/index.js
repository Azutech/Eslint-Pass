const express = require("express");

const app = express();

const number = 3000;

app.get("/", (req, res) => {
   res.status(200).json({
      message: "here we are",
      status: 200,
   });
});

app.listen(number, () => {
   console.log(`We are listening at this number ${number}`);
});
