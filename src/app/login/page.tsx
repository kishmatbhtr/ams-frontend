"use client";

import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { loginSchema } from "@/schemas/login";
import { Fragment } from "react";

import LoginForm from "@/components/LoginForm";
import AuthNavigationBar from "@/components/layout/AuthNavigationBar";

function LoginPage() {
  const router = useRouter();

  const initialValues = {
    email: "",
    password: "",
  };

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
      router.replace('/');
    },
  });

  return (
    <Fragment>
      <AuthNavigationBar routeName="/register" title="Register Now" />
      <LoginForm
        values={values}
        errors={errors}
        onChange={handleChange}
        onBlur={handleBlur}
        submitHandler={handleSubmit}
      />
    </Fragment>
  );
}

export default LoginPage;
