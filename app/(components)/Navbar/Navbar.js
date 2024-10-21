"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  MdOutlineFolderOpen,
  MdDelete,
  MdDownload,
  MdOutlineStarOutline,
} from "react-icons/md";
import { GoCode } from "react-icons/go";
import { FaTrashAlt } from "react-icons/fa";
import { AiFillFolderAdd } from "react-icons/ai";
import Link from "next/link";
import { BsToggleOn } from "react-icons/bs";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef();

  const user = { name: "adit", email: "adi@gmail.com" };
  useEffect(() => {
    const handleScroll = () => {
      console.log();
      if (window.scrollY >= 75) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // function removeUser() {
  //     signOut(auth)
  //         .then(() => {
  //             dispatch(logout(null))
  //             localStorage.clear()
  //             console.log("User signed out successfully");
  //         })
  //         .catch((error) => {
  //             console.log(error.message);
  //         });
  // }

  return (
    <div
      className={`top-5 w-full rounded-xl flex justify-between items-center font-semibold text-white px-10 transition-all duration-150 ease-in-out ${
        isSticky
          ? "fixed left-0 !top-0 z-10 bg-[#3a98d2] !rounded-none h-[70px]"
          : "bg-[#079bda] h-[80px]"
      }`}
    >
      <div className="logo text-2xl">
        <Link href={"/"} className="link">
          <h2>Snippty</h2>
        </Link>
      </div>
      <div className="nav_links flex items-center justify-around gap-8 text-lg font-bold cursor-pointer">
        <Link href={"/"} className="nav_link link">
          <BsToggleOn className="darkMode text-4xl pt-1 text-white" />
        </Link>
        <Link href={"/"} className="nav_link link">
          Snippets
        </Link>
        <Link href={"/create"} className="nav_link link">
          Create
        </Link>
        <span>{user.email}</span>
        <span
          className="nav_link link"
          // onClick={removeUser}
        >
          Logout
        </span>
        {!user && (
          <>
            <Link href={"/login"} className="nav_link link">
              Login
            </Link>
            <Link href={"/signup"} className="nav_link link">
              Signup
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
