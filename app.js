var express = require("express");
var app = express();
app.get("/lessons", (req, res) => {
  // Retrieve list of lessons from database or other source
  var lessons = [
    { id: 1, topic: "Math", location: "Room 1", price: 100 },
    { id: 2, topic: "English", location: "Room 2", price: 150 },
    { id: 3, topic: "Physics", location: "Room 3", price: 200 },
    { id: 4, topic: "Anatomy", location: "Room 4", price: 250 },
  ];

  res.json(lessons);
});
app.get("/user", (req, res) => {
  var user = { email: "user@email.com", password: "mypassword" };

  res.json(user);
});
app.listen(3000, () => console.log("Server listening on port 3000"));
