import PunchInOutRecords from "@/components/admin/PunchInOutRecords";
import { getRequest } from "@/components/auth/api/getRequest";

async function getPunchInRecords() {
  const getPunchInRecordsUrl = "http://127.0.0.1:8000/api/punchin/";
  const res = await getRequest(getPunchInRecordsUrl);

  return res.json();
}

export default async function PunchInPage() {
  const punchInRecords = await getPunchInRecords();
  return (
    <div className="bg-[#ECF5FF] flex-grow">
      <PunchInOutRecords punchInOutRecords={punchInRecords} />
    </div>
  );
}
