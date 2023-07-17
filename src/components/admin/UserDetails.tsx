"use client";

import { useState } from "react";

import { Form, Input, Select, Avatar } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";

interface UsersType {
  id?: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  role?: number;
}

function UserDetails(props: UsersType) {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Add Profile
      </div>
    </div>
  );

  function updateHandler() {}

  return (
    <div className="w-full h-screen flex flex-col items-center pt-16">
      <div className="flex w-full items-center">
        <div className="text-end w-[55%]">
          <Avatar
            className="bg-[#0F1E54] m-8 border-none"
            size={100}
            src="/images/user.png"
          >
            <span className="text-2xl"></span>
          </Avatar>
          {/* <Upload
            name="avatar"
            listType="picture-circle"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          >
            {imageUrl ? <img src={imageUrl}></img> : uploadButton}
          </Upload> */}
        </div>

        <div className="flex justify-center w-[45%]">
          <Upload>
            <Button icon={<UploadOutlined />}>Upload Documents</Button>
          </Upload>
        </div>
      </div>
      <Form
        className="w-[40%]"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
      >
        <Form.Item label="User ID" name="id" initialValue={props.id}>
          <Input readOnly />
        </Form.Item>
        <Form.Item
          label="First Name"
          name="firstname"
          initialValue={props.first_name}
        >
          <Input readOnly />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastname"
          initialValue={props.last_name}
        >
          <Input readOnly />
        </Form.Item>
        <Form.Item label="Email" name="email" initialValue={props.email}>
          <Input readOnly />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>
        <Form.Item label="Roles">
          <Select defaultValue={props.role}>
            <Select.Option value={1}>Admin</Select.Option>
            <Select.Option value={2}>Manager</Select.Option>
            <Select.Option value={3}>User</Select.Option>
          </Select>
        </Form.Item>
        <div className="text-center pb-5">
          <button className="bg-[#0F1E54] rounded-sm px-4 py-2 text-white font-medium hover:bg-white hover:text-[#0F1E54] hover:font-bold hover:border-2 hover:border-[#0F1E54]">
            Update
          </button>
        </div>
      </Form>
      <button className="border-[3px] border-dashed border-[#0F1E54] px-4 py-2 rounded-sm font-bold text-[#0F1E54] hover:border-blue-500 hover:text-blue-500">
        Generate QR Code
      </button>
    </div>
  );
}

export default UserDetails;
