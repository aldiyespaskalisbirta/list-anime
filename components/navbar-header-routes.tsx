"use client";

import Logo from "@/components/logo";
import { BsSearch } from "react-icons/bs";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavbarHeaderRoutes() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between w-full">
      <Link href="/" className="md:hidden">
        <Logo />
      </Link>
      <BsSearch size={20} />
      <Button className="bg-sky-700">Login</Button>
    </nav>
  );
}
