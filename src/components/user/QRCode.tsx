"use client";

import { useState, useEffect } from "react";
import { getRequest } from "@/components/auth/api/getRequest";
import { HOST } from "@/utils/constant";

export default function QRCode() {
  const [qrImg, setQRImg] = useState<string>("");

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const getUserUrl = `${HOST}/api/user/${userId}`;

    getRequest(getUserUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data["profile"] === null) {
          setQRImg("");
        } else {
          setQRImg(data["profile"]["qr_image"]);
        }
      });
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg w-auto h-5/6 mt-10 mx-10 flex flex-col justify-center items-center text-xl font-semibold">
      {qrImg === "" ? <div></div> : <p className="text-xl">GET YOUR QR CODE</p>}

      {qrImg === "" ? (
        <img src="/images/no-task.png" className="w-52 pl-8 pb-8" />
      ) : (
        <img src={qrImg} alt="qr-code" />
      )}

      {qrImg === "" ? (
        <p>{"QR Code has not been generated by Admin yet :("}</p>
      ) : (
        <form method="get" action={qrImg}>
          <button
            type="submit"
            className="bg-purple-400 px-4 py-2 rounded-sm hover:bg-purple-500"
          >
            Download QR
          </button>
        </form>
      )}
    </div>
  );
}
