const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

require("dotenv").config();

console.log(process.env.TEST);

const studentSchema = new mongoose.Schema({
  studentId: Number,
  firstName: String,
  lastName: String,
  type: String,
});

const Student = mongoose.model("students", studentSchema);

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/students", async (req, res) => {
  const students = await Student.find(
    {},
    { _id: 0, studentId: 1, firstName: 1, lastName: 1, type: 1 }
  ).limit(100);
  return res.status(200).json(students);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

mongoose.mongoose.connect(
  "mongodb://localhost:27017/medcelAdmin",
  () => {
    console.log("connected");
  },
  (e) => console.error(e)
);
