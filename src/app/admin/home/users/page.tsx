"use client";

import { useEffect, useState } from "react";

import ManageUsers from "@/components/admin/ManageUsers";
import { getRequest } from "@/components/auth/api/getRequest";
import { HOST } from "@/utils/constant";
import { Skeleton } from "antd";

interface UsersType {
  id?: number;
  first_name?: string;
  last_name?: string;
  email?: string;
}

export default function ManageUsersPage() {
  const [users, setUsers] = useState<UsersType>();
  const [isLoading, setIsLoading] = useState(true);

  function getUsers() {
    const getUsersUrl = `${HOST}/api/user/`;

    getRequest(getUsersUrl)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="bg-[#ECF5FF] flex-grow">
      {isLoading ? (
        <div className="bg-white shadow-md rounded-lg w-auto h-5/6 mt-10 mx-10 text-xl font-semibold relative p-6">
          <Skeleton active />
        </div>
      ) : (
        <ManageUsers users={users} getUsers={getUsers} />
      )}
    </div>
  );
}
