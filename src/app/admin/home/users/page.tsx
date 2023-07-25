"use client";

import { useState, useEffect } from "react";

import ManageUsers from "@/components/admin/ManageUsers";
import { getRequest } from "@/components/auth/api/getRequest";
import { Skeleton } from "antd";

interface UsersType {
  id?: number;
  first_name?: string;
  last_name?: string;
  email?: string;
}

// async function getUsers() {
//   const getUsersUrl = "http://127.0.0.1:8000/api/user/";

//   const res = await getRequest(getUsersUrl);

//   return res.json();
// }

export default function ManageUsersPage() {
  const [users, setUsers] = useState<UsersType>();
  const [isLoading, setIsLoading] = useState(true);
  // const users: UsersType[] = await getUsers();

  function getUsers() {
    const getUsersUrl = "http://127.0.0.1:8000/api/user/";

    getRequest(getUsersUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTimeout(() => {
          setUsers(data);
          setIsLoading(false);
        }, 3000);
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
