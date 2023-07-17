"use client";

import { useRef } from "react";

import React from "react";
import Webcam from "react-webcam";
import { Button } from "@/components/ui/button";

const videoConstraints = {
  width: 600,
  height: 400,
  facingMode: "user",
};

export default function PunchIn() {
  const webcamRef = React.useRef<Webcam>(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    console.log(imageSrc);
  }, [webcamRef]);

  return (
    <div className="bg-white shadow-md rounded-lg w-auto h-5/6 my-10 mx-10 flex flex-col justify-center items-center text-xl font-semibold">
      <div>
        <Webcam
          screenshotFormat="image/jpeg"
          style={{ borderRadius: "10px" }}
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
