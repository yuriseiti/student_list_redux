import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button } from "antd";
import { fetchStudents } from "../actions/Students";
import axios from "axios";

function Container() {
  const dispatch = useDispatch();
  // const [dataSource, setDataSource] = useState([]);

  const { dataSource } = useSelector((state) => state);

  // useEffect(() => {
  //   const fetchStudents = async () => {
  //     const students = await axios.get("http://localhost:3000/students");
  //     setDataSource(students.data);
  //   };
  //   fetchStudents();
  // }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "studentId",
      key: "studentId",
    },
    {
      title: "Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
  ];

  function onClick() {
    dispatch(fetchStudents(dataSource));
  }

  return (
    <>
      <Table dataSource={dataSource} columns={columns} />
      <Button onClick={() => onClick()}>Atualizar lista</Button>
    </>
  );
}

export default Container;
