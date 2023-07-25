"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { antdNotification } from "@/utils/antdNotification";
import { Spin } from "antd";

interface UserIdPropsType {
  id: number;
}

export default function GenerateQRCode(props: UserIdPropsType) {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  async function generateQR(id: number) {
    setIsLoading(true);

    const generateQRUrl = `http://127.0.0.1:8000/api/gen-qr/${id}`;

    const res = await fetch(generateQRUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      setIsLoading(false);  

      router.refresh();
      router.replace(`/admin/home/users/${id}`);
      antdNotification(
        "success",
        `QR for UserID: ${id}`,
        "QR Code generated successfully"
      );
    } else {
      setIsLoading(false);
      antdNotification("error", "", "Failed to generate QR Code");
    }
  }
  return (
    <div className="text-center">
      {isLoading ? (
        <Spin tip="Generating QR Code" size="large" className="mt-6 font-bold">
          <div className="content" />
        </Spin>
      ) : (
        <button
          className="border-[3px] border-dashed border-[#0F1E54] px-4 py-2 rounded-sm font-bold text-[#0F1E54] hover:border-blue-500 hover:text-blue-500"
          onClick={() => generateQR(props.id)}
          type="button"
        >
          Generate QR Code
        </button>
      )}
    </div>
  );
}
