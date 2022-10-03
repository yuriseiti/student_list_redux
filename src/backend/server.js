const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

require("dotenv").config();

console.log(process.env.TEST);

const studentSchema = new mongoose.Schema({
  account: {
    username: String,
    email: String,
  },
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
app.use(express.static("./images"));

app.get("/students", async (req, res) => {
  try {
    const students = await Student.find(
      {},
      { _id: 0, studentId: 1, firstName: 1, lastName: 1, type: 1 }
    ).limit(100);
    return res.status(200).json(students);
  } catch (error) {
    console.log(error);
  }
});

app.post("/students/add", async (req, res) => {
  try {
    const { studentId, name, lastName, type } = req.body.data.values;
    console.log(studentId);
    await Student.create({
      account: {
        username: studentId,
        email: `${name}@${studentId}`,
      },
      studentId: Number(studentId),
      firstName: name,
      lastName: lastName,
      type: type,
    });
    return res.status(201).json({ message: "Usuário criado" });
  } catch (error) {
    console.log(error);
  }
});

app.delete("/students", async (req, res) => {
  try {
    const { studentId } = req.body;
    console.log(studentId);

    await Student.deleteOne({ studentId: studentId });
    return res.status(200).json({ message: "Removido" });
  } catch (error) {
    console.log(error);
  }
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
