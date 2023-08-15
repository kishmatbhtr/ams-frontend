"use client";

import { resetPasswordSchema } from "@/schemas/reset_password";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";

import AuthNavigationBar from "@/components/auth/layout/AuthNavigationBar";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import { postRequest } from "@/components/auth/api/postRequest";
import { antdNotification } from "@/utils/antdNotification";
import { HOST } from "@/utils/constant";

function ResetPasswordPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const resetPasswordUrl = `${HOST}/api/reset-password/`;

  const initialValues = {
    email: "",
    password: "",
    confirmpassword: "",
  };

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: resetPasswordSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      const res = await postRequest(resetPasswordUrl, {
        email: values.email,
        new_password: values.password,
      });

      const resData = await res.json();

      if (res.ok) {
        setIsLoading(false);
        antdNotification(
          "success",
          "Reset Success",
          "Password reset successfully"
        );
        router.replace("/");
      } else if (resData["message"] == "User not found") {
        setIsLoading(false);
        antdNotification(
          "error",
          "Reset Failed",
          "User with provided email not found"
        );
      } else {
        setIsLoading(false);
        antdNotification("error", "Reset Failed", "");
      }
    },
  });

  return (
    <Fragment>
      <AuthNavigationBar routeName="/" title="Login" />
      <ResetPasswordForm
        isLoading={isLoading}
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
