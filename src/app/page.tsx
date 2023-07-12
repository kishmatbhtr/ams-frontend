"use client";

import { loginSchema } from "@/schemas/login";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";

import LoginForm from "@/components/auth/LoginForm";
import AuthNavigationBar from "@/components/auth/layout/AuthNavigationBar";

function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const initialValues = {
    email: "",
    password: "",
  };

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      setIsLoading(true);
      console.log(values);

      router.replace("/home");
    },
  });

  return (
    <Fragment>
      <AuthNavigationBar routeName="/register" title="Register Now" />
      <LoginForm
        loading={isLoading}
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
