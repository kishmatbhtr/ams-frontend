"use client";

import { Form, Input, Select } from "antd";

function UserDetails() {
  return (
    <div className="w-full h-screen flex flex-col items-center pt-16">
      <img src="/images/user.png" alt="" className="w-28 m-10" />
      <Form
        className="w-[40%] "
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
      >
        <Form.Item label="User ID" name="id" initialValue={1}>
          <Input readOnly />
        </Form.Item>
        <Form.Item label="First Name" name="firstname" initialValue={"John"}>
          <Input readOnly />
        </Form.Item>

        <Form.Item label="Last Name" name="lastname" initialValue={"Doe"}>
          <Input readOnly />
        </Form.Item>
        <Form.Item label="Email" name="email" initialValue={"John@gmail.com"}>
          <Input readOnly />
        </Form.Item>
        <Form.Item label="Roles">
          <Select value="3">
            <Select.Option value="1">Admin</Select.Option>
            <Select.Option value="2">Manager</Select.Option>
            <Select.Option value="3">User</Select.Option>
          </Select>
        </Form.Item>
      </Form>
      <button className="border-[3px] border-dashed border-[#0F1E54] px-4 py-2 rounded-sm font-bold text-[#0F1E54] hover:border-blue-500 hover:text-blue-500">
        Generate QR Code
      </button>
    </div>
  );
}

export default UserDetails;
