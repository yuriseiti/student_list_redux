import axios from "axios";

export default async function (state = "", action) {
  switch (action.type) {
    case "FETCH_STUDENTS": {
      action.payload = await axios.get("http://localhost:3000/students");
      return action.payload;
    }
    default:
      return state;
  }
}
