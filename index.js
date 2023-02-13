var express = require("express");
var app = express();
var PORT = 80;

// Without middleware
app.get("/", function (req, res) {
  // Setting the response
  res.set("Content-Type", "application/javascript");

  // "application/json"
  console.log(res.get("Content-Type"));
  res.status(200).send({
    status: "success",
    data: {
      message: "API working fine",
    },
  });
  res.end();
});

app.listen(80, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
