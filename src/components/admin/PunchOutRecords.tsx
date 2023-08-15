"use client";

import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
interface DataType {
  key?: number;
  email?: string;
  punchOutTime?: string;
}

interface PunchOutRecordsType {
  id: number;
  email: string;
  punchout_time: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Punch Out ID",
    dataIndex: "key",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Punch Out Time",
    dataIndex: "punchOutTime",
  },
];

let data: DataType[] = [];

export default function PunchOutRecords(props: any) {
  data = [];

  props.punchInRecords.results.map((e: PunchOutRecordsType) => {
    data.push({
      key: e["id"],
      email: e["email"],
      punchOutTime: e["punchout_time"],
    });
  });
  return (
    <div className="bg-white shadow-md rounded-lg w-auto h-5/6 my-10 mx-10 text-xl font-semibold">
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 8 }}
      />
    </div>
  );
}
