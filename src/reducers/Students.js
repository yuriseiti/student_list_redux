export default function (state = [], action) {
  switch (action.type) {
    case "FETCH_STUDENTS": {
      return action.payload;
    }
    case "ADD_STUDENT": {
      return state;
    }
    case "DELETE_STUDENTS": {
      return state;
    }
    case "CLEAR_STUDENTS": {
      return action.payload;
    }
    default:
      return state;
  }
}
