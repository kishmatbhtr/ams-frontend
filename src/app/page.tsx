"use client";

import PunchIn from "@/components/HomePage/punchIn";
import QRCode from "@/components/HomePage/qrcode";
import Report from "@/components/HomePage/report";
import Navbar from "@/components/HomePage/vertical-nav";
import { CaretDownFilled, LogoutOutlined } from "@ant-design/icons";
import Link from "next/link";

import userImg from "../static/images/user.png";
import Image from "next/image";
import { useState } from "react";

type homeDiv = "punchIn" | "qrCode" | "report";

export default function Home() {
  const [div, setDiv] = useState<homeDiv>("punchIn");
  const [showPanel, setShowPanel] = useState(false);

  const changeHandler = (textOfDiv: String) => {
    console.log("console-log-from-parent-", textOfDiv);
    if (textOfDiv == "Punch In") {
      setDiv("punchIn");
    } else if (textOfDiv == "QR Code") {
      setDiv("qrCode");
    } else {
      setDiv("report");
    }
  };

  return (
    <div className="flex h-screen">
      <Navbar changeHandler={changeHandler} div={div} />
      <div className="w-5/6 flex flex-col h-screen">
        <div className="flex p-4 shadow-md border-b-2 justify-end bg-white">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => {
              setShowPanel(!showPanel);
            }}
          >
            {/* <Image className="" src={userImg} width={32} alt="alt" /> */}
            <img src="/images/user.png" alt="" className="w-8"/>
            <CaretDownFilled />
          </div>
          <div
            id="dropdown"
            className={`${
              !showPanel ? "hidden" : "absolute"
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
        <div className="bg-[#ECF5FF] flex-grow">
          {div == "punchIn" ? (
            <PunchIn />
          ) : div == "qrCode" ? (
            <QRCode />
          ) : (
            <Report />
          )}
        </div>
      </div>
    </div>
  );
}
