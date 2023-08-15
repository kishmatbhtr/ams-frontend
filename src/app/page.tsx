"use client";

import { loginSchema } from "@/schemas/login";
import { useFormik } from "formik";
import { redirect, useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

import LoginForm from "@/components/auth/LoginForm";
import AuthNavigationBar from "@/components/auth/layout/AuthNavigationBar";
import { antdNotification } from "@/utils/antdNotification";
import { signIn, useSession } from "next-auth/react";

function LoginPage() {
  const session = useSession();

  if(session?.data?.user.role == 1){
    redirect("/admin/home");
  }
  else if(session.data?.user.role == 3){
    redirect("/home");
  }
  else{}

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
        antdNotification("success", "Login Success", "Logged in as Admin");
        router.replace("/admin/home");
      } else {
        antdNotification("success", "Login Success", "Logged in as User");
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

      const result = await signIn('credentials',{email:values.email,password:values.password, redirect:false})

      if (result?.error) {
        // Handle authentication error
        setIsLoading(false);
        antdNotification(
              "error",
              "Login Failed",
              "Incorrect authentication credentials"
            );
      } else {
        }
      }

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
