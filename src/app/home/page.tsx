import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/option";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if(!session){
    redirect("/?callbackUrl=/home");
  }

  if(session?.user.role === 1){
    redirect("/admin/home");
  }
  
  return (
    <div className="h-screen bg-[#ECF5FF]">
      <div className="bg-white shadow-md rounded-lg w-auto h-5/6 my-10 mx-10 flex justify-center items-center text-xl font-semibold">
        <img className="w-96" src="images/greeting.gif" />
      </div>
    </div>
  );
}
