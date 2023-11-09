import NavbarHeaderRoutes from "@/components/navbar-header-routes";
import MobileSidebar from "./mobile-sidebar";

export default function NavbarHeader() {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <MobileSidebar />
      <NavbarHeaderRoutes />
    </div>
  );
}
