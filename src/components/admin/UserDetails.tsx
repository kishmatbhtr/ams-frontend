"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { Form, Input, Select, Spin, Modal } from "antd";
import { UploadOutlined, FilePdfFilled } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { postRequest } from "../auth/api/postRequest";
import { antdNotification } from "@/utils/antdNotification";
import GenerateQRCode from "./GenerateQRCode";
import { HOST } from "@/utils/constant";

interface ProfileType {
  id: number;
  profile_img: string;
  qr_image: string;
  identity_doc: string;
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
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState(props.role);

  const [profileloading, setProfileLoading] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [img, setImg] = useState<string>(
    props.profile === null || undefined ? "" : props.profile.profile_img
  );

  const [docs, setDocs] = useState<string>(
    props.profile === null || undefined ? "" : props.profile.identity_doc
  );
  const [qr, setQRCode] = useState<string>(
    props.profile === null || undefined ? "" : props.profile.qr_image
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const router = useRouter();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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

    const editUserUrl = `${HOST}/api/update-user/`;

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
      router.refresh();
      router.replace('/admin/home/users')
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
            {img ? (
              <img src={img} className="rounded-full object-cover"></img>
            ) : (
              <img src="/images/user.png"></img>
            )}
          </Upload>
        </div>

        <div className="flex flex-col justify-between items-center w-[45%]">
          <Upload
            accept=".pdf"
            beforeUpload={beforeUploadDocs}
            onRemove={() => setDocs("")}
          >
            <Button icon={<UploadOutlined />}>Upload Document</Button>
          </Upload>
          {docs === "" ? (
            <p className="text-sm pt-6">No documents available for preview</p>
          ) : (
            <FilePdfFilled
              className="text-[2rem] cursor-pointer hover:text-blue-500 pt-6"
              onClick={showModal}
            />
          )}
          <Modal
            className="text-center top-[6%] left-[8%] transform-translate"
            open={isModalOpen}
            onCancel={handleCancel}
            footer={null}
            closable={false}
          >
            <object
              className="w-full"
              data={docs}
              type="application/pdf"
              height={600}
            ></object>
          </Modal>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[52%] flex justify-end">
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
            {qr === "" ? <div></div> : <img src={qr} alt="QR Code" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
