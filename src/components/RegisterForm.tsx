import { ChangeEventHandler, FocusEventHandler, FormEventHandler } from "react";

type valuesType = {
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  confirmpassword?: string;
};

type errorsType = {
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  confirmpassword?: string;
};

interface RegisterFormProps {
  values: valuesType;
  errors: errorsType;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
  onBlur: FocusEventHandler<HTMLInputElement | HTMLSelectElement>;
  submitHandler: FormEventHandler<HTMLFormElement>;
}

function RegisterForm(props: RegisterFormProps) {
  return (
    <div className="h-[90vh] flex justify-center items-center">
      <div className="bg-white p-8 w-[25rem] rounded-md shadow-lg relative">
        <div className="bg-[#C6D9EE] absolute top-0 right-0 left-0 h-14 rounded-se-md rounded-ss-md flex justify-center items-center">
          <h1 className="text-2xl text-[#0F1E54] font-semibold block text-center">
            Register
          </h1>
        </div>
        <form onSubmit={props.submitHandler} className="pt-8">
          <div className="pb-2">
            <p className="text-[12px] text-center text-[#0F1E54]">
              Welcome, introduce your credentials to begin.
            </p>
          </div>
          <div className="relative mb-5">
            <input
              type="text"
              id="firstname"
              className="border-2 block px-2.5 py-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-sm border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F1E54] peer"
              placeholder=" "
              name="firstname"
              value={props.values.firstname}
              onChange={props.onChange}
              onBlur={props.onBlur}
            />
            <label
              htmlFor="firstname"
              className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-[#0F1E54]  peer-placeholder-shown:scale-105 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-80 peer-focus:-translate-y-4 left-1"
            >
              First Name
            </label>
            <p className="text-red-500 text-xs absolute">
              {props.errors.firstname}
            </p>
          </div>

          <div className="relative my-5">
            <input
              type="text"
              id="lastname"
              className="border-2 block px-2.5 py-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-sm border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F1E54] peer"
              placeholder=" "
              name="lastname"
              value={props.values.lastname}
              onChange={props.onChange}
              onBlur={props.onBlur}
            />
            <label
              htmlFor="lastname"
              className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-[#0F1E54]  peer-placeholder-shown:scale-105 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-80 peer-focus:-translate-y-4 left-1"
            >
              Last Name
            </label>
            <p className="text-red-500 text-xs absolute">
              {props.errors.lastname}
            </p>
          </div>

          <div className="relative my-5">
            <input
              type="email"
              id="email"
              className="border-2 block px-2.5 py-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-sm border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F1E54] peer"
              placeholder=" "
              name="email"
              value={props.values.email}
              onChange={props.onChange}
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
              className="border-2 block px-2.5 py-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-sm border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F1E54] peer"
              placeholder=" "
              name="password"
              value={props.values.password}
              onChange={props.onChange}
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
          <div className="relative my-5">
            <input
              type="password"
              id="confirmpassword"
              className="border-2 block px-2.5 py-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-sm  border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F1E54] peer"
              placeholder=" "
              name="confirmpassword"
              value={props.values.confirmpassword}
              onChange={props.onChange}
              onBlur={props.onBlur}
            />
            <label
              htmlFor="confirmpassword"
              className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-[#0F1E54]  peer-placeholder-shown:scale-105 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-80 peer-focus:-translate-y-4 left-1"
            >
              Confirm Password
            </label>
            <p className="text-red-500 text-xs absolute">
              {props.errors.confirmpassword}
            </p>
          </div>
          {/* <div className="relative my-3">
            <select
              name="roles"
              id="roles"
              className="border-2 block px-2.5  py-3 w-full text-sm text-gray-900 bg-transparent rounded-sm border-gray-300 focus:border-[#0F1E54]"
              value={props.values.roles}
              onChange={props.onChange}
              onBlur={props.onBlur}
            >
              <option value="" disabled>
                Select a role
              </option>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
              <option value="user">User</option>
            </select>
          </div>
          <p className="text-red-500 text-xs">{props.errors.roles}</p> */}
          <button
            type="submit"
            className="bg-[#0F1E54] w-full py-2 rounded-sm text-white font-medium hover:bg-white hover:text-[#0F1E54] hover:font-bold hover:border-2 hover:border-[#0F1E54]"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
