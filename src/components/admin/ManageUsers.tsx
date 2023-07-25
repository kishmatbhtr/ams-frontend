"use client";

import Link from "next/link";
import { Table, Space, Popconfirm } from "antd";

import type { ColumnsType } from "antd/es/table";
import AddUser from "./AddUser";
import { antdNotification } from "@/utils/antdNotification";

interface DataType {
  key: number;
  firstname?: string;
  lastname?: string;
  email?: string;
}

export default function ManageUsers(props: any) {
  async function deleteUserHandler(id: number) {
    const res = await fetch(`http://127.0.0.1:8000/api/user/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      props.getUsers();
      antdNotification("success", "", "User removed successfully");
    } else {
      antdNotification("error", "", "Failed to remove user");
    }
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
          <Popconfirm
            title="Remove User"
            description="Are you sure, remove this user?"
            okText="Yes"
            okType="default"
            cancelText="No"
            okButtonProps={{ className: "background-color: blue" }}
            onConfirm={() => deleteUserHandler(record.key)}
          >
            <span className="text-red-400 hover:text-red-500 cursor-pointer">
              Delete
            </span>
          </Popconfirm>
        </Space>
      ),
    },
  ];

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
      <div className="absolute top-3 right-12">
        <AddUser getUsers={props.getUsers} />
      </div>
    </div>
  );
}
