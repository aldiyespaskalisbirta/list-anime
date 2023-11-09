import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BiMenu } from "react-icons/bi";

import Sidebar from "./sidebar";

export default function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition z-50">
        <BiMenu size={20} />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-white">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
