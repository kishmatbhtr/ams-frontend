"use client";

import { useFormik } from "formik";
import { registerSchema } from "@/schemas/register";
import { Fragment } from "react";

import RegisterForm from "@/components/auth/RegisterForm";
import AuthNavigationBar from "@/components/auth/layout/AuthNavigationBar";

function RegisterPage() {
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
    onSubmit: (values) => {
      console.log(values);
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
