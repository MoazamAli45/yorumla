"use client";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import PrimaryButton from "../shared/PrimaryButton";

const ForgetForm = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email });
  };

  return (
    <form className="flex flex-col gap-2  w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-black-primary font-medium text-base"
        >
          Email<span className="text-primary">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="py-[9px] px-[12px] rounded-[50px] text-grey shadow-[0px_0px_0px_1px_#122B6914,0px_1px_2px_0px_#122B6914,0px_2px_6px_0px_#122B690A] focus:outline-none"
          placeholder="darlenerob@gmail.com"
          required
        />
      </div>

      {/*  Button Submit */}

      <PrimaryButton> Submit </PrimaryButton>
      <p className="text-grey font-normal text-center my-2">
        Back to{" "}
        <Link
          href={"/signin"}
          className="text-black-primary font-bold underline  hover:text-primary transition-colors"
        >
          Sign In
        </Link>
      </p>
    </form>
  );
};

export default ForgetForm;
