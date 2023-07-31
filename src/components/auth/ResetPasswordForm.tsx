import { ChangeEventHandler, FocusEventHandler, FormEventHandler } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type valuesTypes = {
  email?: string;
  password?: string;
  confirmpassword?: string;
};

type errorsTypes = {
  email?: string;
  password?: string;
  confirmpassword?: string;
};

interface ResetPasswordFormPropsTypes {
  isLoading: boolean;
  values: valuesTypes;
  errors: errorsTypes;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
  submitHandler: FormEventHandler<HTMLFormElement>;
}

function ResetPasswordForm(props: ResetPasswordFormPropsTypes) {
  return (
    <div className="h-[90vh] flex justify-center items-center">
      <div className="bg-white shadow-lg p-8 w-[25rem] rounded-md relative">
        <div className="bg-[#C6D9EE] absolute top-0 right-0 left-0 h-14 rounded-se-md rounded-ss-md flex justify-center items-center">
          <h1 className="text-2xl text-[#0F1E54] font-semibold block text-center">
            Reset Password
          </h1>
        </div>
        <form onSubmit={props.submitHandler} className="pt-8">
          <div className="relative mt-3 mb-5">
            <input
              type="email"
              id="email"
              className="border-2 block px-2.5 py-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-sm border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F1E54] peer"
              placeholder=" "
              onChange={props.onChange}
              value={props.values.email}
              onBlur={props.onBlur}
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-[#0F1E54]  peer-placeholder-shown:scale-105 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-80 peer-focus:-translate-y-4 left-1"
            >
              Email
            </label>
            <p className="text-red-500 text-xs absolute">
              {props.errors.email}
            </p>
          </div>
          <div className="relative my-5">
            <input
              type="password"
              id="password"
              className="border-2 block px-2.5 py-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-sm border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F1E54] peer"
              placeholder=" "
              onChange={props.onChange}
              value={props.values.password}
              onBlur={props.onBlur}
            />
            <label
              htmlFor="password"
              className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-[#0F1E54]  peer-placeholder-shown:scale-105 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-80 peer-focus:-translate-y-4 left-1"
            >
              New Password
            </label>
            <p className="text-red-500 text-xs absolute">
              {props.errors.password}
            </p>
          </div>
          <div className="relative my-5">
            <input
              type="password"
              id="confirmpassword"
              className="border-2 block px-2.5 py-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-sm border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F1E54] peer"
              placeholder=" "
              onChange={props.onChange}
              value={props.values.confirmpassword}
              onBlur={props.onBlur}
            />
            <label
              htmlFor="confirmpassword"
              className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-[#0F1E54]  peer-placeholder-shown:scale-105 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-80 peer-focus:-translate-y-4 left-1"
            >
              Confirm New Password
            </label>
            <p className="text-red-500 text-xs absolute">
              {props.errors.confirmpassword}
            </p>
          </div>
          {props.isLoading ? (
            <Button
              disabled
              className="bg-[#0F1E54] w-full py-2 mt-5 rounded-sm text-white font-medium hover:bg-white hover:text-[#0F1E54] hover:font-bold hover:border-2 hover:border-[#0F1E54]"
            >
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Resetting Password
            </Button>
          ) : (
            <Button
              type="submit"
              className="bg-[#0F1E54] w-full py-2 rounded-sm text-white text-[16px] font-medium hover:bg-white hover:text-[#0F1E54] hover:font-bold hover:border-2 hover:border-[#0F1E54]"
            >
              Reset
            </Button>
          )}
        </form>
      </div>
    </div>
  );
}

export default ResetPasswordForm;
