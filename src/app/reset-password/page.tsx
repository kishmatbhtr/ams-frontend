"use client";

import { resetPasswordSchema } from "@/schemas/reset_password";
import { useFormik } from "formik";
import { Fragment } from "react";

import AuthNavigationBar from "@/components/layout/AuthNavigationBar";
import ResetPasswordForm from "@/components/ResetPasswordForm";

function ResetPasswordPage() {
  const initialValues = {
    email: "",
    password: "",
    confirmpassword: "",
  };

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: resetPasswordSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Fragment>
      <AuthNavigationBar routeName="/" title="Login" />
      <ResetPasswordForm
        values={values}
        errors={errors}
        onChange={handleChange}
        onBlur={handleBlur}
        submitHandler={handleSubmit}
      />
    </Fragment>
  );
}

export default ResetPasswordPage;
