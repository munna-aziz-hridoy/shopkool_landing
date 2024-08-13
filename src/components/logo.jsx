import React from "react";

import logo from "@/assets/images/logo_main.png";
import Image from "next/image";

function Logo({ width = 135, height = 50 }) {
  return (
    <div className="relative">
      <Image src={logo.src} width={width} height={height} />
    </div>
  );
}

export default Logo;
