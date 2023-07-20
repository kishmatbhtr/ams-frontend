"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import { Form, Input, Select, Spin } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { postRequest } from "../auth/api/postRequest";
import { antdNotification } from "@/utils/antdNotification";
import GenerateQRCode from "./GenerateQRCode";

interface ProfileType {
  id: number;
  profile_img: string;
  qr_image: string;
}

interface UsersPropsType {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: number;
  profile: ProfileType;
}

function UserDetails(props: UsersPropsType) {
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(props.role);

  const [profileloading, setProfileLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState<string>(props.profile.profile_img);
  const [docs, setDocs] = useState<string>();
  const [qrImg, setQRImg] = useState<string>(
    "http://127.0.0.1:9000/qr-images/Pratik.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=F8UUVEOR2G392V1MFFPB%2F20230720%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230720T071628Z&X-Amz-Expires=604800&X-Amz-Security-Token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NLZXkiOiJGOFVVVkVPUjJHMzkyVjFNRkZQQiIsImV4cCI6MTY4OTg2ODY5OCwicGFyZW50IjoiUk9PVE5BTUUifQ.PZY9QEZh5j9_355EbbUB9Dm8hw_23yy6Sd-3M9mmb6k0oq9w2-GFOPrybjdmwTaEhZxvGjsKfezbNUah93Bk0A&X-Amz-SignedHeaders=host&versionId=null&X-Amz-Signature=790c2405dd0b67de46c9dc07cf7c8eff6f921d85b4e60890d83ec7b61e4646e1"
  );

  const convertBase64 = (file: File) => {
    return new Promise<string | ArrayBuffer | null>((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const beforeUploadProfile = async (file: RcFile) => {
    setProfileLoading(true);
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      setProfileLoading(false);
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      setProfileLoading(false);
      message.error("Image must be smaller than 2MB!");
    }

    if (isJpgOrPng) {
      setProfileLoading(false);
      const base64Img = await convertBase64(file);
      if (typeof base64Img === "string") {
        setImg(base64Img);
      }
    }

    return false;
  };

  const beforeUploadDocs = async (file: RcFile) => {
    const isLt2M = file.size / 1024 / 1024 < 10;
    if (!isLt2M) {
      message.error("File must be smaller than 10MB!");
    }

    const base64Docs = await convertBase64(file);
    if (typeof base64Docs === "string") {
      setDocs(base64Docs);
    }

    return false;
  };

  function passwordHandler(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function roleHandler(value: number) {
    setRole(value);
  }

  async function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const editUserUrl = "http://127.0.0.1:8000/api/update-user/";

    const res = await postRequest(editUserUrl, {
      id: props.id,
      password: password,
      role: role,
      profile_img: img?.split(",")[1],
      identity_doc: docs?.split(",")[1],
    });
    if (res.ok) {
      setLoading(false);
      antdNotification("success", "", "Updated Successfully");
    } else {
      setLoading(false);
      antdNotification("error", "", "Update Failed");
    }
  }

  return loading ? (
    <div className="w- full h-screen flex justify-center items-center">
      <Spin size="large" />
    </div>
  ) : (
    <div className="w-[full] h-screen flex flex-col items-center pt-16">
      <div className="flex w-full items-center">
        <div className="text-end w-[53%] mb-3">
          <Upload
            name="avatar"
            listType="picture-circle"
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={beforeUploadProfile}
          >
            {img ? <img src={img}></img> : <img src="/images/user.png"></img>}
          </Upload>
        </div>

        <div className="flex flex-col items-center w-[45%] mb-3">
          <Upload accept=".pdf" beforeUpload={beforeUploadDocs}>
            <Button icon={<UploadOutlined />}>Upload Documents</Button>
          </Upload>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[50%] flex justify-end">
          <Form
            className="w-[85%]"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onSubmitCapture={submitHandler}
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
              <Input.Password onChange={passwordHandler} value={password} />
            </Form.Item>
            <Form.Item label="Roles">
              <Select defaultValue={role} onChange={roleHandler}>
                <Select.Option value={1}>Admin</Select.Option>
                <Select.Option value={2}>Manager</Select.Option>
                <Select.Option value={3}>User</Select.Option>
              </Select>
            </Form.Item>
            <div className="text-center pb-5">
              <button
                className="bg-[#0F1E54] rounded-sm px-4 py-2 text-white font-medium hover:bg-white hover:text-[#0F1E54] hover:font-bold hover:border-2 hover:border-[#0F1E54]"
                type="submit"
              >
                Update
              </button>
            </div>
            <GenerateQRCode id={props.id} />
          </Form>
        </div>

        <div className=" h-[60%] flex justify-end items-center">
          <div className="w-36">
            <img src={qrImg} alt="QR Code" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
