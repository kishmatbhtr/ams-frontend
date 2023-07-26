"use client";

import { useFormik } from "formik";
import { registerSchema } from "@/schemas/register";
import { Fragment } from "react";
import { useRouter } from "next/navigation";

import RegisterForm from "@/components/auth/RegisterForm";
import AuthNavigationBar from "@/components/auth/layout/AuthNavigationBar";
import { postRequest } from "@/components/auth/api/postRequest";
import { antdNotification } from "@/utils/antdNotification";
import { HOST } from "@/utils/constant";

function RegisterPage() {
  const router = useRouter();

  const registerUrl = `${HOST}/api/user/`;

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  };

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      console.log(values);
      const res = await postRequest(registerUrl, {
        first_name: values.firstname,
        last_name: values.lastname,
        email: values.email,
        password: values.password,
      });

      const data = await res.json();

      if (res.ok) {
        antdNotification(
          "success",
          "Register Success",
          "Thank You for your registration, redirecting to login page"
        );
        router.replace('/');
      } else if (
        (await data["email"][0]) === "user with this email already exists."
      ) {
        antdNotification("error", "Register Failed", "Email is already taken");
      }
    },
  });
  return (
    <Fragment>
      <AuthNavigationBar routeName="/" title="Login" />
      <RegisterForm
        values={values}
        errors={errors}
        onChange={handleChange}
        onBlur={handleBlur}
        submitHandler={handleSubmit}
      />
    </Fragment>
  );
}

export default RegisterPage;
