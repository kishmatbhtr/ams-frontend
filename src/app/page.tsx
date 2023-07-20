"use client";

import { loginSchema } from "@/schemas/login";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";

import LoginForm from "@/components/auth/LoginForm";
import AuthNavigationBar from "@/components/auth/layout/AuthNavigationBar";
import { postRequest } from "@/components/auth/api/postRequest";
import { antdNotification } from "@/utils/antdNotification";

function LoginPage() {
  const loginUrl = "http://127.0.0.1:8000/api/login/";

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const initialValues = {
    email: "",
    password: "",
  };

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      setIsLoading(true);

      const res = await postRequest(loginUrl, {
        email: values.email,
        password: values.password,
      });

      const resData = await res.json();

      if (res.ok) {
        localStorage.setItem("firstname", resData["first_name"]);
        localStorage.setItem("access", resData["access"]);
        localStorage.setItem("refresh", resData["refresh"]);
        console.log(resData);
        if (resData["role"] == 1) {
          antdNotification("success", "Login Success", "Logged in as Admin");
          router.replace("/admin/home");
          setIsLoading(false);
        } else {
          antdNotification("success", "Login Success", "Logged in as User");
          router.replace("/home");
          setIsLoading(false);
        }
      } else if (
        resData["detail"] === "Incorrect authentication credentials."
      ) {
        setIsLoading(false);
        antdNotification(
          "error",
          "Login Failed",
          "Incorrect authentication credentials"
        );
      }
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
