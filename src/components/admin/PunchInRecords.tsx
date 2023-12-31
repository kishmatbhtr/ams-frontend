"use client";

import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
interface DataType {
  key?: number;
  email?: string;
  punchInTime?: string;
  punchOutTime?: string;
}

interface PunchInRecordsType {
  id: number;
  email: string;
  punchin_time: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Punch In ID",
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

let data: DataType[] = [];

export default function PunchInRecords(props: any) {
  data = [];

  props.punchInRecords.results.map((e: PunchInRecordsType) => {
    data.push({
      key: e["id"],
      email: e["email"],
      punchInTime: e["punchin_time"],
    });
  });
  return (
    <div className="bg-white shadow-md rounded-lg w-auto h-5/6 my-10 mx-10 text-xl font-semibold">
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 8 }} />
    </div>
  );
}
