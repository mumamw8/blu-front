import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MobileSidebar } from "./mobile-sidebar";

export const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex justify-between items-center bg-white shadow-sm">
      <MobileSidebar />
      <div className="md:ml-auto">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="uname" />
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
