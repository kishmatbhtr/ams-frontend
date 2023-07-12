"use client";


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
    <div className="h-screen">
      <div className="bg-white shadow-md rounded-lg w-auto h-5/6 my-10 mx-10 flex justify-center items-center text-xl font-semibold">
        <img className="w-96" src="images/greeting.gif" />
      </div>
    </div>
  );
}
