import { lusitana } from "@/app/ui/fonts";
import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";

function Sidebar() {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-4 mt-6 md:mt-0">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
}

export default Sidebar;
