import axios from "axios";

export function fetchStudents() {
  return async (dispatch) => {
    try {
      const students = await axios.get("http://localhost:3000/students");
      dispatch({
        type: "FETCH_STUDENTS",
        payload: students.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function removeStudents(studentId) {
  return async (dispatch) => {
    try {
      await axios.delete("http://localhost:3000/students", {
        data: { studentId },
      });
      dispatch(fetchStudents());
    } catch (error) {
      console.log(error);
    }
  };
}

export function addStudent(values) {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3000/students/add", {
        data: { values },
      });
      dispatch(fetchStudents());
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
}

export function clearStudents() {
  return {
    type: "CLEAR_STUDENTS",
    payload: [],
  };
}
