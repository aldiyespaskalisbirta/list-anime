import NavbarFooterRoutes from "@/app/(dashboard)/_components/navbar-footer-routes";
import React from "react";

export default function NavbarFooter() {
  return (
    <div className="md:hidden px-4 py-1 border-b h-full flex items-center bg-white shadow-sm">
      <NavbarFooterRoutes />
    </div>
  );
}
