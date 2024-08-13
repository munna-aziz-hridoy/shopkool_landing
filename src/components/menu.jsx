import React from "react";

const menus = [
  {
    title: "Docs",
    url: "/ShopKool.pdf",
    download: true,
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Technology",
    url: "/technology",
  },
];

function Menu() {
  return (
    <ul className="flex justify-end gap-5">
      {menus.map((menu, i) => (
        <li key={i} className="hover:bg-primary/5 px-3 py-1 duration-200">
          <a
            className="text-lg font-medium text-white/70 hover:text-white"
            href={menu.url}
            download={menu.download ? true : undefined}
          >
            {menu.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
