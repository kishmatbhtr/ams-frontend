"use client";

import React from "react";
import Webcam from "react-webcam";
import { Button } from "@/components/ui/button";
import { antdNotification } from "@/utils/antdNotification";
import { useRouter } from "next/navigation";

const videoConstraints = {
  width: 250,
  height: 250,
  facingMode: "user",
};

export default function PunchIn() {
  const router = useRouter();

  async function punchInRequest(data: string) {
    const punchInUrl = "http://127.0.0.1:8000/api/verify-qr/";

    const res = await fetch(punchInUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        qr_image: data,
      }),
    });
    const resData = await res.json();

    if (res.ok) {
      if (resData.message === "Punch In Successfully") {
        antdNotification("success", "Valid QR, Punch In Successfully");
        router.replace("/home");
      }
    } else if (resData.message === "QR Data do not match") {
      antdNotification("error", "Invalid QR, Please try again");
    }
  }

  const webcamRef = React.useRef<Webcam>(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();

    if (typeof imageSrc === "string") {
      punchInRequest(imageSrc.substring(23));
    }
  }, [webcamRef]);

  return (
    <div className="bg-white shadow-md rounded-lg w-auto h-5/6 my-10 mx-10 flex flex-col justify-center items-center text-xl font-semibold">
      <div>
        <Webcam
          screenshotFormat="image/jpeg"
          style={{ borderRadius: "8px" }}
          videoConstraints={videoConstraints}
          ref={webcamRef}
        ></Webcam>
      </div>
      <div>
        <Button
          type="submit"
          className="bg-[#0F1E54] w-full py-2 mt-5 rounded-sm text-white text-[16px] font-medium hover:bg-white hover:text-[#0F1E54] hover:font-bold hover:border-2 hover:border-[#0F1E54]"
          onClick={capture}
        >
          PUNCH IN
        </Button>
      </div>
    </div>
  );
}
