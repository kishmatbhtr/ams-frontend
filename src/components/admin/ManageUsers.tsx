"use client";

import Link from "next/link";

import { Table, Space } from "antd";

import type { ColumnsType } from "antd/es/table";
import AddUser from "./AddUser";

interface DataType {
  key?: number;
  firstname?: string;
  lastname?: string;
  email?: string;
}

// interface UsersType {
//   id?: number;
//   first_name?: string;
//   last_name?: string;
//   email?: string;
// }

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
        <Link
          href={`/admin/home/users/${record.key}`}
          className="text-blue-300"
        >
          View Details
        </Link>
      </Space>
    ),
  },
];
const data: DataType[] = [];

export default function ManageUsers(props: any) {
  const data: DataType[] = [];
  props.users.map((e: any) => {
    data.push({
      key: e.id,
      firstname: e.first_name,
      lastname: e.last_name,
      email: e.email,
    });
  });
  return (
    <div className="bg-white shadow-md rounded-lg w-auto h-5/6 mt-10 mx-10 text-xl font-semibold relative">
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ defaultPageSize: 8 }}
      />
      <div className="absolute top-2 right-12">
        <AddUser />
      </div>
    </div>
  );
}
