"use client";

import Link from "next/link";

import { Space } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Table } from "antd";

interface DataType {
  key?: number;
  firstname?: string;
  lastname?: string;
  email?: string;
}

interface UsersType {
  id?: number;
  first_name?: string;
  last_name?: string;
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

function AntdTable(props: UsersType) {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ defaultPageSize: 8 }}
    />
  );
}

export default AntdTable;
