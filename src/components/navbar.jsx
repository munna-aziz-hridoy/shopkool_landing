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
              href="https://multistore-management.vercel.app/"
              rel="noreferrer"
              target="_blank"
              className="border-2 border-white px-3 py-1 text-white font-medium hover:bg-white hover:text-primary duration-200"
            >
              Try Free Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
