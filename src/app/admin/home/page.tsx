import { authOptions } from "@/app/api/auth/[...nextauth]/option";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  if(!session){
    redirect("/?callbackUrl=/admin/home");
  }

  if(session?.user.role == 3){
    redirect("/home");
  }
  return (
    <div className="h-screen bg-[#ECF5FF]">
      <div className="bg-white shadow-md rounded-lg w-auto h-5/6 my-10 mx-10 flex justify-center items-center text-xl font-semibold">
        <img className="w-[40%]" src="../images/admin-greeting.gif" />
      </div>
    </div>
  );
}
