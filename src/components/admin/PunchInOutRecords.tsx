"use client";

import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
interface DataType {
  key?: number;
  email?: string;
  punchInTime?: string;
  punchOutTime?: string;
}

interface PunchInOutRecordsType {
  id: number;
  email: string;
  punchin_time: string;
  punchout_time: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "PID",
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
  {
    title: "Punch Out Time",
    dataIndex: "punchOutTime",
  },
];

let data: DataType[] = [];

export default function PunchInOutRecords(props: any) {
  data = [];

  props.punchInOutRecords.map((e: PunchInOutRecordsType) => {
    data.push({
      key: e["id"],
      email: e["email"],
      punchInTime: e["punchin_time"],
      punchOutTime: "",
    });
  });
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
