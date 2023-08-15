"use client";

import { registerSchema } from "@/schemas/register";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { Fragment } from "react";

import RegisterForm from "@/components/auth/RegisterForm";
import { postRequest } from "@/components/auth/api/postRequest";
import AuthNavigationBar from "@/components/auth/layout/AuthNavigationBar";
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
