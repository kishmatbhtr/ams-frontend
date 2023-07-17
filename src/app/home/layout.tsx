import MainNav from "@/components/user/MainNav";
import SideBar from "@/components/user/SideBar";

import type { Metadata } from "next";
// import { Poppins } from "next/font/google";

// const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Home page of next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={poppins.className}> */}
      <body>
        <div className="flex h-screen">
          <SideBar />
          <div className="w-full flex flex-col h-screen">
            <MainNav />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
