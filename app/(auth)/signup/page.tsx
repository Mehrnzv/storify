import AuthForm from "@/components/AuthForm";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Sign Up"
}

const SignUpPage = () => {
  return <AuthForm type="signup" />;
};

export default SignUpPage;
