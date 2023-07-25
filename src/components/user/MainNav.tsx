"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CaretDownFilled, LogoutOutlined } from "@ant-design/icons";
import { antdNotification } from "@/utils/antdNotification";

export default function MainNav() {
  const [showPanel, setShowPanel] = useState(false);
  const [firstName, setFirstName] = useState<string | null>();

  const router = useRouter();

  useEffect(() => {
    setFirstName(localStorage.getItem("firstname"));
  }, []);

  function logoutHandler() {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("firstname");

    antdNotification("success", "Logout Success", "Logged out successfully");
    router.replace("/");
  }

  return (
    <div className="flex p-4 border-b-2 justify-between bg-white">
      <h3 className="font-bold text-lg">W E L C O M E !</h3>
      <div
        className="flex items-center cursor-pointer"
        onClick={() => {
          setShowPanel(!showPanel);
        }}
      >
        <p className="px-2 font-semibold">{firstName}</p>
        {/* <p className="px-2 font-semibold">User</p> */}
        <Avatar>
          <AvatarImage src="/images/user.png" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <CaretDownFilled />
      </div>
      <div
        id="dropdown"
        className={`${
          !showPanel ? "hidden" : "absolute"
        } right-4 top-14 z-10 bg-white hover:bg-gray-50 divide-y divide-gray-100 rounded-sm w-24 border-2 dark:bg-gray-500`}
      >
        <ul className="py-1">
          <li>
            <span className="flex justify-center items-center">
              <span
                className="px-2 text-[15px] cursor-pointer"
                onClick={logoutHandler}
              >
                Logout
              </span>
              <LogoutOutlined />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
