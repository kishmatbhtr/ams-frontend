import { Fragment } from "react";

function MainNavigation() {
  return (
    <Fragment>
      <div className="bg-white h-14 fixed left-[12rem] end-0 flex items-center justify-end">
        <div className="mr-10">
          <img src="./images/profile.png" alt="User" className="w-8" />
        </div>
      </div>
      <div className="bg-[#0F1E54] fixed top-0 bottom-0 w-48 flex justify-start py-5 px-8">
        <span className="font-bold text-blue-500">Do</span>
        <span className="font-bold text-white">MS</span>
      </div>
    </Fragment>
  );
}

export default MainNavigation;
