export function fetchStudents(dataSource) {
  return {
    type: "FETCH_STUDENTS",
    payload: dataSource,
  };
}
