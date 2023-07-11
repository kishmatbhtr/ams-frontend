import * as Yup from "yup";

export const resetPasswordSchema = Yup.object({
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be of atleast 8 characters")
    .required("Password is required"),
  confirmpassword: Yup.string()
    .min(8, "Password must be of atleast 8 characters")
    .required("Confirm Password is required")
    .oneOf(
      [Yup.ref("password")],
      "Password and Confirm password does'nt match"
    ),
});
