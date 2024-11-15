import AuthForm from "@/components/AuthForm";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Sign In"
}

const SignInPage = () => {
  return <AuthForm type="signin" />;
};

export default SignInPage;
