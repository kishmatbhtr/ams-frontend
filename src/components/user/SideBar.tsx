"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-[#0F1E54] text-white px-8 py-4">
      <h2 className="font-bold text-2xl">
        <span className="text-blue-500 ">A</span>MS
      </h2>

      <div className="mt-28">
        <h3 className="text-blue-500 font-semibold text-xl">MENU</h3>
        <div className="text-neutral-300 mt-6 space-y-3 flex flex-col">
          <Link
            href="/home/punchin"
            className={`${
              pathname == "/home/punchin"
                ? "font-semibold text-white"
                : "hover:underline"
            } cursor-pointer`}
          >
            Punch In
          </Link>
          <Link
            href="/home/qrcode"
            className={`${
              pathname == "/home/qrcode"
                ? "font-semibold text-white"
                : "hover:underline"
            } cursor-pointer`}
          >
            QR Code
          </Link>
          {/* <Link
            href="/home/report"
            className={`${
              pathname == "/home/report"
                ? "font-semibold text-white"
                : "hover:underline"
            } cursor-pointer`}
          >
            Report
          </Link> */}
        </div>
      </div>
    </div>
  );
}
