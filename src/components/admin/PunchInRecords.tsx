"use client";

import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
interface DataType {
  key?: number;
  email?: string;
  punchInTime?: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "S.N",
    dataIndex: "key",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Punch In Time",
    dataIndex: "punchInTime",
  },
];
const data: DataType[] = [
  {
    key: 1,
    email: "Johnbrown@gmail.com",
    punchInTime: "2023-07-11 06:49:58",
  },
  {
    key: 2,
    email: "Johnbrown@gmail.com",
    punchInTime: "2023-07-11 06:49:58",
  },
  {
    key: 3,
    email: "Johnbrown@gmail.com",
    punchInTime: "2023-07-11 06:49:58",
  },
  {
    key: 4,
    email: "Johnbrown@gmail.com",
    punchInTime: "2023-07-11 06:49:58",
  },
  {
    key: 5,
    email: "Johnbrown@gmail.com",
    punchInTime: "2023-07-11 06:49:58",
  },
  {
    key: 6,
    email: "Johnbrown@gmail.com",
    punchInTime: "2023-07-11 06:49:58",
  },
  {
    key: 7,
    email: "Johnbrown@gmail.com",
    punchInTime: "2023-07-11 06:49:58",
  },
  {
    key: 8,
    email: "Johnbrown@gmail.com",
    punchInTime: "2023-07-11 06:49:58",
  },
  {
    key: 9,
    email: "Johnbrown@gmail.com",
    punchInTime: "2023-07-11 06:49:58",
  },
];

export default function PunchInRecords() {
  return (
    <div className="bg-white shadow-md rounded-lg w-auto h-5/6 my-10 mx-10 text-xl font-semibold">
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ defaultPageSize: 8 }}
      />
    </div>
  );
}
