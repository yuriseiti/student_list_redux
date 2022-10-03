import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button, Form, Checkbox, Input } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import {
  clearStudents,
  fetchStudents,
  removeStudents,
  addStudent,
} from "../actions/Students";

function Container() {
  const dispatch = useDispatch();
  const { students } = useSelector((state) => state);

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
    {
      title: "Actions",
      render: (_, record) => (
        <>
          <Button
            icon={<DeleteOutlined />}
            width={"20px"}
            onClick={() => dispatch(removeStudents(record.studentId))}
          />
        </>
      ),
    },
  ];

  useEffect(() => {
    updateList();

    return () => {
      dispatch(clearStudents());
    };
  }, []);

  function updateList() {
    dispatch(fetchStudents());
  }

  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(addStudent(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Table rowKey="studentId" dataSource={students} columns={columns} />
      <Form
        name="basic"
        labelCol={{
          span: 2,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="studentId"
          name="studentId"
          rules={[
            {
              required: true,
              message: "Please input your student id!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last name"
          name="lastName"
          rules={[
            {
              required: true,
              message: "Please input your last name",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Type"
          name="type"
          rules={[
            {
              required: true,
              message: "Please input your type",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 5,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default Container;
