"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { antdNotification } from "@/utils/antdNotification";
import { CaretDownFilled, LogoutOutlined } from "@ant-design/icons";
import { signOut, useSession } from "next-auth/react";

export default function MainNav() {
  const [showPanel, setShowPanel] = useState(false);
  const [firstName, setFirstName] = useState<string | null>();

  const router = useRouter();
  const {data:session} = useSession();

  useEffect(() => {
    setFirstName(localStorage.getItem("firstname"));
  }, []);

  async function logoutHandler() {
    antdNotification("success", "Logout Success", "Logged out successfully");
    await signOut({redirect:true,callbackUrl:"/"});
  }

  return (
    <div className="flex p-4 border-b-2 justify-between bg-white">
      <h3 className="font-bold text-lg">
        W E L C O M E ! {session?.user?.first_name.toUpperCase()}
      </h3>
      <div
        className="flex items-center cursor-pointer relative"
        onClick={() => {
          setShowPanel(!showPanel);
        }}
      >
        <Avatar>
          <AvatarFallback className="bg-[#0F1E54] text-white">
            {firstName?.substring(0, 1).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <CaretDownFilled />
        <div className="absolute bg-green-500 w-[10px] h-[10px] rounded-full bottom-1 right-4"></div>
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
