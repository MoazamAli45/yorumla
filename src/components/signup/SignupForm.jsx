"use client";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import PrimaryButton from "../shared/PrimaryButton";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, firstName, lastName, confirmPassword });
  };

  return (
    <form className="flex flex-col gap-2  w-full" onSubmit={handleSubmit}>
      {/*  First and Last Name */}
      <div className="flex gap-4 sm:flex-row flex-col ">
        <div className="flex flex-col gap-2 flex-1">
          <label
            htmlFor="firstName"
            className="text-black-primary font-medium text-base"
          >
            First name<span className="text-primary">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="py-[9px] px-[12px] rounded-[50px] text-grey shadow-[0px_0px_0px_1px_#122B6914,0px_1px_2px_0px_#122B6914,0px_2px_6px_0px_#122B690A] focus:outline-none"
            placeholder="Darlene"
            required
          />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label
            htmlFor="lastName"
            className="text-black-primary font-medium text-base"
          >
            Last name<span className="text-primary">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="py-[9px] px-[12px] rounded-[50px] text-grey shadow-[0px_0px_0px_1px_#122B6914,0px_1px_2px_0px_#122B6914,0px_2px_6px_0px_#122B690A] focus:outline-none"
            placeholder="Rob"
            required
          />
        </div>
      </div>
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
      {/*  Confirm Password */}
      <div className="flex flex-col gap-2 mt-4">
        <label
          htmlFor="confirmPassword"
          className="text-black-primary font-medium text-base"
        >
          Confirm Password<span className="text-primary">*</span>
        </label>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full py-[9px] px-[12px] rounded-[50px] text-grey shadow-[0px_0px_0px_1px_#122B6914,0px_1px_2px_0px_#122B6914,0px_2px_6px_0px_#122B690A] focus:outline-none"
            placeholder="123********"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black-primary"
          >
            {showConfirmPassword ? (
              <Eye className="w-[20px] h-[20px]" />
            ) : (
              <EyeOff className="w-[20px] h-[20px]" />
            )}
          </button>
        </div>
      </div>

      {/*  Button Submit */}

      <PrimaryButton> Sign Up</PrimaryButton>
      <p className="text-grey font-normal text-center my-2">
        Already have an account?{" "}
        <Link
          href={"/signin"}
          className="text-black-primary font-bold hover:text-primary transition-colors underline"
        >
          Sign In
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;
