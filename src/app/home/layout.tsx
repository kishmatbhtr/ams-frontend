import Provider from "@/components/Provider";
import MainNav from "@/components/user/MainNav";
import SideBar from "@/components/user/SideBar";

import type { Metadata } from "next";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/option";
// import { Poppins } from "next/font/google";

// const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Home page of next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      {/* <body className={poppins.className}> */}
      <body>
        <Provider session={session as Session}>
        <div className="flex h-screen">
          <SideBar />
          <div className="w-full flex flex-col h-screen">
            <MainNav />
            {children}
          </div>
        </div>
        </Provider>
      </body>
    </html>
  );
}
