import { ChangeEventHandler, FormEventHandler } from "react";

import { Button } from "@/components/ui/button";

interface AddFormPropsType {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  firstNameHandler: ChangeEventHandler<HTMLInputElement>;
  lastNameHandler: ChangeEventHandler<HTMLInputElement>;
  emailHandler: ChangeEventHandler<HTMLInputElement>;
  passwordHandler: ChangeEventHandler<HTMLInputElement>;
  submitHandler: FormEventHandler<HTMLFormElement>;
}

export default function AddUserForm(props: AddFormPropsType) {
  return (
    <form onSubmit={props.submitHandler}>
      <div className="relative mb-5">
        <input
          type="text"
          id="firstname"
          className="border-2 block px-2.5 py-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-sm border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F1E54] peer"
          placeholder=" "
          name="firstname"
          required
          value={props.firstName}
          onChange={props.firstNameHandler}
        />
        <label
          htmlFor="firstname"
          className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-[#0F1E54]  peer-placeholder-shown:scale-105 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-80 peer-focus:-translate-y-4 left-1"
        >
          First Name
        </label>
      </div>

      <div className="relative my-5">
        <input
          type="text"
          id="lastname"
          className="border-2 block px-2.5 py-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-sm border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F1E54] peer"
          placeholder=" "
          name="lastname"
          required
          value={props.lastName}
          onChange={props.lastNameHandler}
        />
        <label
          htmlFor="lastname"
          className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-[#0F1E54]  peer-placeholder-shown:scale-105 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-80 peer-focus:-translate-y-4 left-1"
        >
          Last Name
        </label>
      </div>

      <div className="relative my-5">
        <input
          type="email"
          id="email"
          className="border-2 block px-2.5 py-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-sm border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F1E54] peer"
          placeholder=" "
          name="email"
          required
          value={props.email}
          onChange={props.emailHandler}
        />
        <label
          htmlFor="email"
          className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-[#0F1E54]  peer-placeholder-shown:scale-105 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-80 peer-focus:-translate-y-4 left-1"
        >
          Email
        </label>
      </div>
      <div className="relative my-5">
        <input
          type="password"
          id="password"
          className="border-2 block px-2.5 py-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-sm border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F1E54] peer"
          placeholder=" "
          name="password"
          required
          value={props.password}
          onChange={props.passwordHandler}
        />
        <label
          htmlFor="password"
          className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-[#0F1E54]  peer-placeholder-shown:scale-105 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-80 peer-focus:-translate-y-4 left-1"
        >
          Password
        </label>
      </div>
      <Button
        type="submit"
        className="bg-[#0F1E54] w-full py-2 rounded-sm text-white text-[16px] font-medium hover:bg-white hover:text-[#0F1E54] hover:font-bold hover:border-2 hover:border-[#0F1E54]"
      >
        Add User
      </Button>
    </form>
  );
}
