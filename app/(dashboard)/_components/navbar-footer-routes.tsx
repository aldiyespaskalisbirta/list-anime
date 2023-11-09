"use client";

import { AiOutlineFire } from "react-icons/ai";
import { PiTelevisionLight } from "react-icons/pi";
import { BiHomeAlt2 } from "react-icons/bi";

import { NavbarFooterItem } from "./navbar-footer-item";

export default function NavbarFooterRoutes() {
  const routes = [
    {
      icon: BiHomeAlt2,
      label: "Beranda",
      href: "/",
    },
    {
      icon: AiOutlineFire,
      label: "Trending",
      href: "/trending",
    },
    {
      icon: PiTelevisionLight,
      label: "Anime",
      href: "/anime",
    },
  ];

  return (
    <nav className="h-full w-full grid grid-cols-3 space-x-4">
      {routes.map((route) => (
        <NavbarFooterItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </nav>
  );
}
