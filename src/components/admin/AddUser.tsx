"use client";

import { useState } from "react";

import { PlusOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import AddUserForm from "./AddUserForm";

export default function AddUser() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

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

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
        />
      </Modal>
    </div>
  );
}
