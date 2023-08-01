"use client";

import { loginSchema } from "@/schemas/login";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { Fragment, useState, useEffect } from "react";

import LoginForm from "@/components/auth/LoginForm";
import AuthNavigationBar from "@/components/auth/layout/AuthNavigationBar";
import { postRequest } from "@/components/auth/api/postRequest";
import { antdNotification } from "@/utils/antdNotification";
import { HOST } from "@/utils/constant";

function LoginPage() {
  const loginUrl = `${HOST}/api/login/`;

  const [isLoading, setIsLoading] = useState(false);
  const [isValidating, setIsValidating] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("firstname");
    const role = localStorage.getItem("role");
    if (
      !(user === null || user === undefined) &&
      !(role === null || role === undefined)
    ) {
      if (role === "1") {
        router.replace("/admin/home");
      } else {
        router.replace("/home");
      }
    } else {
      setIsValidating(false);
    }
    setTimeout(() => {
      setIsValidating(false);
    }, 5000);
  }, []);

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
        localStorage.setItem("userId", resData["userId"]);
        localStorage.setItem("firstname", resData["first_name"]);
        localStorage.setItem("access", resData["access"]);
        localStorage.setItem("refresh", resData["refresh"]);
        localStorage.setItem("role", resData["role"]);
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

  return isValidating ? (
    <p className="p-2">Validating status please wait...</p>
  ) : (
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
