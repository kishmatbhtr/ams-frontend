import { ChangeEventHandler, FocusEventHandler, FormEventHandler } from "react";

import Link from "next/link";

type valuesType = {
  email?: string;
  password?: string;
};

type errorsType = {
  email?: string;
  password?: string;
};

interface LoginFormProps {
  values: valuesType;
  errors: errorsType;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
  submitHandler: FormEventHandler<HTMLFormElement>;
}

function LoginForm(props: LoginFormProps) {
  return (
    <div className="h-[90vh] flex justify-center items-center">
      <div className="bg-white shadow-lg p-8 w-[25rem] rounded-md relative">
        <div className="bg-[#C6D9EE] absolute top-0 right-0 left-0 h-14 rounded-se-md rounded-ss-md flex justify-center items-center">
          <h1 className="text-2xl text-[#0F1E54] font-semibold block text-center">
            Log in
          </h1>
        </div>
        <form onSubmit={props.submitHandler} className="pt-8">
          <div className="pb-2">
            <p className="text-[12px] text-center text-[#0F1E54]">
              Welcome, introduce your credentials to begin.
            </p>
          </div>
          <div className="space-y-5">
            <div className="relative">
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
            <div className="relative">
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
                Password
              </label>
              <p className="text-red-500 text-xs absolute">
                {props.errors.password}
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#0F1E54] w-full py-2 mt-5 rounded-sm text-white font-medium hover:bg-white hover:text-[#0F1E54] hover:font-bold hover:border-2 hover:border-[#0F1E54]"
          >
            Login
          </button>
        </form>
        <div className="p-2 flex justify-center items-center space-x-1">
          <p className="text-[12px]">Forgot your password?</p>
          <Link href="/reset-password">
            <p className="text-[12px] font-medium text-[#0F1E54] hover:underline">
              Click here
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
