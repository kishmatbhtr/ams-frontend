"use client";

import { useState, useEffect } from "react";

import PunchOutRecords from "@/components/admin/PunchOutRecords";
import { getRequest } from "@/components/auth/api/getRequest";
import { HOST } from "@/utils/constant";
import { Skeleton } from "antd";

export default function PunchOutPage() {
  const [punchOutRecords, setPunchOutRecords] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPunchOutRecordsUrl = `${HOST}/api/punchout/`;
    getRequest(getPunchOutRecordsUrl)
      .then((res) => res.json())
      .then((data) => {
        setPunchOutRecords(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="bg-[#ECF5FF] flex-grow">
      {isLoading ? (
        <div className="bg-white shadow-md rounded-lg w-auto h-5/6 mt-10 mx-10 text-xl font-semibold relative p-6">
          <Skeleton active />
        </div>
      ) : (
        <PunchOutRecords punchInRecords={punchOutRecords} />
      )}
    </div>
  );
}
