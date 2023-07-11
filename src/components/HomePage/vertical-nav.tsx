import { MouseEvent } from "react";
type homeDiv = "punchIn" | "qrCode" | "report";

interface navProps {
    changeHandler: (div: String) => void,
    div: homeDiv
}

export default function Navbar({ changeHandler, div }: navProps) {

    const clickHandler = (e: MouseEvent<HTMLParagraphElement>) => {
        if (e.currentTarget.textContent != null) {
            changeHandler(e.currentTarget.textContent);
        }
    }

    return (
        <div className="w-1/6 bg-[#0F1E54] text-white px-8 py-4">
            <h2 className="font-bold text-2xl"><span className="text-blue-300 ">Do</span>MS</h2>

            <div className="mt-28">
                <h3 className="font-semibold text-xl">MENU</h3>
                <div className="text-neutral-300 mt-6 space-y-3">
                    <p onClick={clickHandler} className={` ${(div == "punchIn") ? "text-white font-semibold" : ""}  cursor-pointer`}>Punch In</p>
                    <p onClick={clickHandler} className={` ${(div == "qrCode") ? "text-white font-semibold" : ""}  cursor-pointer`}>QR Code</p>
                    <p onClick={clickHandler} className={` ${(div == "report") ? "text-white font-semibold" : ""}  cursor-pointer`}>Report</p>
                </div>
            </div>
        </div>
    )

}