"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, Sun, Menu, X, Moon } from "lucide-react";
import Wrapper from "./Wrapper";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  const searchInputRef = useCallback(
    (inputElement) => {
      if (inputElement && isSearchExpanded) {
        inputElement.focus();
      }
    },
    [isSearchExpanded]
  );

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 900);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const toggleSearch = () => setIsSearchExpanded(!isSearchExpanded);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSearchExpanded && !event.target.closest(".search-container")) {
        setIsSearchExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchExpanded]);

  const NavLinks = () => (
    <>
      <Link
        href="/"
        className="text-lg font-medium text-black-primary dark:text-white  hover:text-primary transition-colors"
      >
        Complaints
      </Link>
      <Link
        href="/"
        className="text-lg font-medium text-black-primary dark:text-white hover:text-primary transition-colors"
      >
        Brands
      </Link>
    </>
  );

  const ActionButtons = () => (
    <>
      <Link
        href="/signin"
        className="text-base font-medium  hover:text-primary  transition-colors"
      >
        Sign in/Sign Up
      </Link>
      <button className="bg-primary   text-white gap-1 hover:bg-primary/90 text-center rounded-full py-2 px-4 sm:p-4 flex items-center justify-center hover:bg-primary-dark transition-colors">
        Create a Complaint{" "}
        <ArrowRight className="text-white size-[22px] ml-2" />
      </button>
    </>
  );

  const IconButtons = () => (
    <div className="flex items-center space-x-4">
      {/*  For Large Screen Only */}
      <div className="hidden lg:block relative search-container">
        <div className="flex items-center">
          <div
            className={`flex items-center ${
              isSearchExpanded
                ? "bg-gray-100 dark:bg-black-primary"
                : "bg-white dark:bg-black-primary"
            } rounded-full overflow-hidden transition-all duration-300 ease-in-out ${
              isSearchExpanded ? "w-64" : "w-10"
            }`}
          >
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search..."
              className={` border-none outline-none dark:bg-black-primary  py-2 px-4 w-full ${
                isSearchExpanded ? "opacity-100" : "opacity-0"
              } transition-opacity duration-300 ease-in-out`}
            />
            <button
              aria-label="Search"
              className="flex items-center bg-white dark:bg-black-primary justify-center w-10 h-10 focus:outline-none"
              onClick={toggleSearch}
            >
              <Search
                className={`size-[22px] text-black-primary dark:text-white ${
                  !isSearchExpanded && "-translate-x-5"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
      {/*  For mobile screen Only search bar Other is same   */}
      <button
        aria-label="Search"
        className="flex lg:hidden items-center justify-center w-10 h-10 focus:outline-none"
      >
        <Search className={`size-[18px] text-black-primary dark:text-white`} />
      </button>
      <button
        aria-label="Toggle theme"
        className="focus:outline-none"
        onClick={toggleTheme}
      >
        {theme === "dark" ? (
          <Sun className="size-[22px] text-black-primary dark:text-white" />
        ) : (
          <Moon className="size-[22px] text-black-primary dark:text-white" />
        )}
      </button>
      <button aria-label="Change language" className="focus:outline-none">
        {theme === "dark" ? (
          <Image
            src={"/assets/language-dark.svg"}
            alt="Language"
            width={22}
            height={22}
            className="cursor-pointer"
          />
        ) : (
          <Image
            src={"/assets/language.svg"}
            alt="Language"
            width={22}
            height={22}
            className="cursor-pointer"
          />
        )}
      </button>
    </div>
  );

  return (
    <Wrapper className="my-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Link href="/">
            <Image
              src={
                theme === "dark"
                  ? "/assets/main-logo-dark.svg"
                  : "/assets/main-logo.svg"
              }
              alt="Logo"
              width={152}
              height={40}
              className="cursor-pointer"
            />
          </Link>

          {!isSmallScreen && (
            <>
              <span className="text-[#E2E8F0] text-[30px]">/</span>
              <div className="flex gap-4 items-center">
                <NavLinks />
              </div>
            </>
          )}
        </div>

        {isSmallScreen ? (
          <div className="flex items-center space-x-4">
            <IconButtons />
            <button
              onClick={toggleDrawer}
              aria-label="Open menu"
              className="focus:outline-none"
            >
              <Menu className="size-[22px] text-black-primary" />
            </button>
          </div>
        ) : (
          <div className="flex gap-4 items-center">
            <IconButtons />
            <ActionButtons />
          </div>
        )}
      </div>

      {/* Drawer for small screens */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <Link href="/">
              <Image
                src={
                  theme === "dark"
                    ? "/assets/main-logo-dark.svg"
                    : "/assets/main-logo.svg"
                }
                alt="Logo"
                width={152}
                height={40}
                className="cursor-pointer"
              />
            </Link>
            <button
              onClick={toggleDrawer}
              className="focus:outline-none"
              aria-label="Close menu"
            >
              <X className="size-[22px] text-black-primary" />
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <NavLinks />
            <div className="flex flex-col gap-4 mb-4">
              <ActionButtons />
            </div>
          </div>
        </div>
      </div>
      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleDrawer}
        ></div>
      )}
    </Wrapper>
  );
}
