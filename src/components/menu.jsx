import Link from "next/link";
import React from "react";

const menus = [
  {
    title: "Docs",
    url: "/docs",
  },
  {
    title: "Blogs",
    url: "/blogs",
  },
  {
    title: "About",
    url: "https://mirailit.com/",
    external: true,
  },
];

function Menu() {
  return (
    <ul className="flex justify-end gap-5">
      {menus.map((menu, i) => (
        <li key={i} className="hover:bg-primary/5 px-3 py-1 duration-200">
          {menu?.external ? (
            <a
              className="text-lg font-medium text-white/70 hover:text-white"
              href={menu.url}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              {menu.title}
            </a>
          ) : (
            <Link href={menu.url}>
              <p className="text-lg font-medium text-white/70 hover:text-white">
                {menu.title}
              </p>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Menu;
