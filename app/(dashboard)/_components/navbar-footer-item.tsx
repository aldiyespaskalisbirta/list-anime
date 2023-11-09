"use client";

import { usePathname, useRouter } from "next/navigation";

import { IconType } from "react-icons";
import { cn } from "@/lib/utils";

interface Props {
  icon: IconType;
  label: string;
  href: string;
}

export function NavbarFooterItem({ icon: Icon, label, href }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "py-2 flex items-center justify-center relative text-slate-500 text-sm transition-all hover:text-slate-600 hover:bg-slate-300/20",
        isActive && "text-sky-700 hover:text-sky-700"
      )}
    >
      <div className="flex flex-col items-center">
        <Icon
          size={24}
          className={cn("text-slate-500", isActive && "text-sky-700")}
        />
        <span className={cn("text-[10px]", isActive && "text-sky-700")}>
          {label}
        </span>
      </div>
      <div
        className={cn(
          "absolute top-0 opacity-0 border-2 border-sky-700 w-[60%] transition-all",
          isActive && "opacity-100"
        )}
      />
    </button>
  );
}
