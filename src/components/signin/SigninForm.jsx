"use client";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const SigninForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
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
      <div className="flex flex-col gap-2 mt-4">
        <label
          htmlFor="password"
          className="text-black-primary font-medium text-base"
        >
          Password<span className="text-primary">*</span>
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full py-[9px] px-[12px] rounded-[50px] text-grey shadow-[0px_0px_0px_1px_#122B6914,0px_1px_2px_0px_#122B6914,0px_2px_6px_0px_#122B690A] focus:outline-none"
            placeholder="123********"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black-primary"
          >
            {showPassword ? (
              <Eye className="w-[20px] h-[20px]" />
            ) : (
              <EyeOff className="w-[20px] h-[20px]" />
            )}
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            className="rounded-[4px] text-black-primary accent-black-primary"
          />
          <label htmlFor="remember" className="text-grey text-sm font-medium">
            Reminder for 30 days
          </label>
        </div>
        <Link href={"/"} className="text-grey font-semibold">
          Forgot password?
        </Link>
      </div>
      {/*  Button Submit */}
      <button className="bg-primary rounded-full p-4 text-white mt-4 font-semibold ">
        Sign In
      </button>
      <p className="text-grey font-normal text-center my-2">
        Don’t have an account?{" "}
        <Link
          href={"/signup"}
          className="text-black-primary font-bold underline"
        >
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default SigninForm;
