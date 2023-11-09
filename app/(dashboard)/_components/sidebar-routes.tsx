"use client";

import { BsBookmarkPlus, BsClock, BsBell } from "react-icons/bs";
import { SlDiamond } from "react-icons/sl";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";

import { SidebarItem } from "./sidebar-item";

const routes = [
  {
    icon: RxDashboard,
    label: "Beranda",
    href: "/",
  },
  {
    icon: BsBookmarkPlus,
    label: "Favorit Saya",
    href: "/favorite",
  },
  {
    icon: BsClock,
    label: "Sejarah",
    href: "/penduduk",
  },
  {
    icon: SlDiamond,
    label: "Premium",
    href: "/berita",
  },
  {
    icon: AiOutlineInfoCircle,
    label: "Profil Saya",
    href: "/statistik",
  },
  {
    icon: BsBell,
    label: "Pemberitahuan Sistem",
    href: "/print",
  },
];

export default function SidebarRoutes() {
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
}
