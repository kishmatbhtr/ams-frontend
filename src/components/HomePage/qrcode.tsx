import Image from "next/image";
import QRImage from "../../static/images/QR_code.png";

export default function QRCode() {
    return (
        <div className="bg-teal-100 flex-grow">
            <div className="bg-slate-100 rounded-lg w-auto h-5/6 mt-10 mx-10 flex flex-col justify-center items-center text-xl font-semibold">
                <p className="text-xl underline">GET YOUR QR CODE</p>

                <Image src={QRImage} alt="qr-code" width={400} />

                <form method="get" action="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/640px-QR_code_for_mobile_English_Wikipedia.svg.png">
                    <button type="submit" className="border-2 border-black bg-purple-400 px-3 py-2 rounded-md">Download QR</button>
                </form>
            </div>
        </div>
    );
}