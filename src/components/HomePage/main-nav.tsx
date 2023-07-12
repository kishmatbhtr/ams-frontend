"use client";

import { CaretDownFilled, LogoutOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useState } from "react";


export default function MainNav() {
  const [showPanel, setShowPanel] = useState(false);

  return (
    <div className="flex p-4 shadow-md border-b-2 justify-end bg-white">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => {
          setShowPanel(!showPanel);
        }}
      >
        {/* <Image className="" src={userImg} width={32} alt="alt" /> */}
        <img src="/images/user.png" alt="" className="w-8" />
        <CaretDownFilled />
      </div>
      <div
        id="dropdown"
        className={`${!showPanel ? "hidden" : "absolute"
          } right-6 top-12 z-10 bg-white divide-y divide-gray-100 rounded-md shadow-sm w-28 border-2 dark:bg-gray-700`}
      >
        <ul className="py-2">
          <li>
            <Link href="/login" className="block px-4 text-md">
              <span className="flex justify-center items-center">
                <span className="mx-2 font-semibold">Logout</span>
                <LogoutOutlined />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>

  );
}