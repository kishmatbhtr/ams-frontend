"use client";

import { CaretDownFilled, LogoutOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useState } from "react";

export default function MainNav() {
  const [showPanel, setShowPanel] = useState(false);

  return (
    <div className="flex p-4 border-b-2 justify-between bg-white">
      <h3 className="font-bold text-lg">D A S H B O A R D</h3>
      <div
        className="flex items-center cursor-pointer"
        onClick={() => {
          setShowPanel(!showPanel);
        }}
      >
        <p className="px-2 font-semibold">Admin</p>
        <img src="/images/profile.png" alt="" className="w-8" />
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
            <Link href="/">
              <span className="flex justify-center items-center">
                <span className="px-2 text-[15px]">Logout</span>
                <LogoutOutlined />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
