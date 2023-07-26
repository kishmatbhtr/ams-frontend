"use client";

import { useState, useEffect } from "react";

import PunchInOutRecords from "@/components/admin/PunchInOutRecords";
import { getRequest } from "@/components/auth/api/getRequest";
import { HOST } from "@/utils/constant";
import { Skeleton } from "antd";

// async function getPunchInRecords() {
//   const getPunchInRecordsUrl = `${HOST}/api/punchin/`;
//   const res = await getRequest(getPunchInRecordsUrl);

//   return res.json();
// }

export default function PunchInPage() {
  const [punchInRecords, setPunchInRecords] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPunchInRecordsUrl = `${HOST}/api/punchin/`;
    getRequest(getPunchInRecordsUrl)
      .then((res) => res.json())
      .then((data) => {
        setPunchInRecords(data);
        setIsLoading(false);
      });
  }, []);

  // const punchInRecords = await getPunchInRecords();
  return (
    <div className="bg-[#ECF5FF] flex-grow">
      {isLoading ? (
        <div className="bg-white shadow-md rounded-lg w-auto h-5/6 mt-10 mx-10 text-xl font-semibold relative p-6">
          <Skeleton active />
        </div>
      ) : (
        <PunchInOutRecords punchInRecords={punchInRecords} />
      )}
    </div>
  );
}
