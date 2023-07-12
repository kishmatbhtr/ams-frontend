import Image from "next/image";
import QRImage from "../../static/images/QR_code.png";

export default function QRCode() {
  return (
    <div className="bg-white shadow-md rounded-lg w-auto h-5/6 mt-10 mx-10 flex flex-col justify-center items-center text-xl font-semibold">
      <p className="text-xl">GET YOUR QR CODE</p>

      <Image src={QRImage} alt="qr-code" width={400} />

      <form
        method="get"
        action="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/640px-QR_code_for_mobile_English_Wikipedia.svg.png"
      >
        <button
          type="submit"
          className="bg-purple-400 px-4 py-2 rounded-sm hover:bg-purple-500"
        >
          Download QR
        </button>
      </form>
    </div>
  );
}