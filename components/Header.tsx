import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex p-5 justify-between sticky top-0 bg-white z-50 shadow-md">
      {/* left */}
      <div className="flex space-x-2 items-center">
        <Image
          src={logo}
          alt="logo"
          height={30}
          width={30}
          className="rounded-full"
        />
        <div>
          <h1 className="text-bold">
            The Daydreamer`s`<span className="text-orange-400">AI</span> Art
            Gallery
          </h1>
          <h2 className="text-xs">
            Powered by DALL.E 2, Chat GPT, & Microsoft Azure
          </h2>
        </div>
      </div>
      {/* right */}
      <div className="flex text-xs md:text-base divide-x items-center text-gray-500">
        <Link
          href="https://www.linkedin.com/in/sebastien-noel-82080279/"
          className="px-2 font-light text-right"
        >
          Linkedin Account
        </Link>

        <Link
          href="https://github.com/Snoel12/Lucid-Thoughts"
          className="px-2 font-light"
        >
          Github Repo
        </Link>
      </div>
    </header>
  );
};

export default Header;
