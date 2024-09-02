import React from "react";
import { Logo, Menu } from ".";

function Navbar() {
  return (
    <nav className="px-4 py-2 bg-primary shadow-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex justify-end gap-4">
            <Menu />
            <a
              href="https://app.storekool.com"
              rel="noreferrer"
              target="_blank"
              className="border-2 border-white px-4 py-2  bg-transparent duration-200 rounded-3xl relative overflow-hidden group"
            >
              <p className="z-20 text-white font-medium group-hover:text-primary relative">
                Try Free Now
              </p>
              <span className="absolute top-0 -left-[200px] group-hover:left-0 z-10 w-[101%] h-[101%] duration-500 bg-white rounded-full" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
