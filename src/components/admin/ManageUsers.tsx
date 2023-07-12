"use client";

import Link from "next/link";
import { Table, Space } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key?: number;
  firstname?: string;
  lastname?: string;
  email?: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "User ID",
    dataIndex: "key",
  },
  {
    title: "First Name",
    dataIndex: "firstname",
  },
  {
    title: "Last Name",
    dataIndex: "lastname",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Action",
    render: (_, record) => (
      <Space size="middle">
        <Link href={`/admin/home/users/${record.key}`}>View Details</Link>
      </Space>
    ),
  },
];
const data: DataType[] = [
  {
    key: 1,
    firstname: "John",
    lastname: "Brown",
    email: "Johnbrown@gmail.com",
  },
  {
    key: 2,
    firstname: "h@",
    lastname: "k",
    email:"k11@test.com",
},{
    key: 3,
    firstname: "ram",
    lastname: "khatri",
    email: "khatri99@test.com"
},
{
    key: 4,
    firstname: "hari",
    lastname: "khatri",
    email: "khatri199@test.com"
},
{
    key: 5,
    firstname: "dipak",
    lastname: "pandey",
    email:"pandey9@test.com"
},
{
    key: 6,
    firstname: "dipak",
    lastname: "paudel",
    email: "dipak@test.com"
}, 
];

export default function ManageUsers() {
  return (
    <div className="bg-white shadow-md rounded-lg w-auto h-5/6 mt-10 mx-10 text-xl font-semibold">
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ defaultPageSize: 8 }}
      />
    </div>
  );
}
