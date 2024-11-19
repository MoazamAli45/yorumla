import ForgetForm from "@/components/forget-password/ForgetForm";
import RightSide from "@/components/shared/RightSide";
import Button from "@/components/shared/SocialButton";
import Wrapper from "@/components/shared/Wrapper";
import SigninForm from "@/components/signin/SigninForm";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <Wrapper>
      <div className="flex gap-8 items-center justify-center min-h-screen ">
        {/*  Left Side  */}
        <div className="flex flex-col gap-4 items-center justify-center  flex-1 py-4  lg:mx-4 gap-2 ">
          <div className="flex flex-col gap-4 w-full ">
            <div className="flex flex-col gap-2">
              <h2 className="text-[30px] text-black-primary font-bold text-center">
                Forgot Password
              </h2>
              <p className="text-grey font-medium text-base">
                Enter your email and we will send you a link to reset your
                password
              </p>
            </div>
          </div>

          {/*  Forget Form */}
          <ForgetForm />
        </div>
        {/*  Right Side  */}
        <div className="hidden lg:flex flex-1 items-center justify-center ">
          <RightSide className={"min-h-[580px]"} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
