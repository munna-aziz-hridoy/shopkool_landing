import React from "react";

import logo from "@/assets/images/logo_main.png";
import Image from "next/image";
import Link from "next/link";

function Logo({ width = 135, height = 50 }) {
  return (
    <Link href="/">
      <div className="relative">
        <Image src={logo.src} width={width} height={height} />
      </div>
    </Link>
  );
}

export default Logo;
