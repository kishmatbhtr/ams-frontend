import Link from "next/link";

function AuthNavigationBar(props: any) {
  return (
    <div className="w-full mb-4 h-14 bg-white flex items-center p-6 justify-between">
      <div>
        <span className="font-bold text-blue-500">AMS</span> Agent
      </div>
      <div>
        <Link href={props.routeName}>
          <p className="text-[#0F1E54] cursor-pointer text-sm font-bold hover:underline">
            {props.title}
          </p>
        </Link>
      </div>
    </div>
  );
}

export default AuthNavigationBar;
