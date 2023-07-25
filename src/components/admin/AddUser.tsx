"use client";

import { useState } from "react";

import { PlusOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import AddUserForm from "./AddUserForm";
import { postRequest } from "../auth/api/postRequest";
import { antdNotification } from "@/utils/antdNotification";

export default function AddUser(props: any) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function firstNameHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setFirstName(event.target.value);
  }

  function lastNameHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setLastName(event.target.value);
  }

  function emailHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function passwordHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  async function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    setIsLoading(true);
    event.preventDefault();

    const res = await postRequest("http://127.0.0.1:8000/api/user/", {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
    });

    const data = await res.json();

    if (res.ok) {
      setIsLoading(false);
      props.getUsers();
      antdNotification("success", "", "User has been added successfully");
      setIsModalOpen(false);
    } else if (
      (await data["email"][0]) === "user with this email already exists."
    ) {
      setIsLoading(false);
      antdNotification("error", "", "Email is already taken");
    }
  }

  return (
    <div>
      <PlusOutlined
        className="text-blue-400 cursor-pointer"
        onClick={showModal}
      />
      <Modal
        className="text-center p-24 top-[10%] left-[8%] transform-translate"
        title="Enter User Details"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        maskClosable={false}
      >
        <AddUserForm
          firstName={firstName}
          lastName={lastName}
          email={email}
          password={password}
          firstNameHandler={firstNameHandler}
          lastNameHandler={lastNameHandler}
          emailHandler={emailHandler}
          passwordHandler={passwordHandler}
          submitHandler={submitHandler}
          isLoading={isLoading}
        />
      </Modal>
    </div>
  );
}
