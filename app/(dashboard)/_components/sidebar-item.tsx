"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

interface SidebarItemProps {
  label: string;
  href: string;
}

export const SidebarItem = ({ label, href }: SidebarItemProps) => {
  const pathName = usePathname();
  const router = useRouter();

  // ensure subroutes are true
  const isActive =
    (pathName === "/" && href === "/") ||
    pathName === href ||
    pathName?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        `flex items-center py-4 gap-x-2 text-slate-500 text-sm font-[500] pl-6
        transition-all hover:text-slate-600 hover:bg-slate-300/20`,
        isActive &&
          `text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700 border-r border-r-4 border-r-sky-700`,
      )}
    >
      {label}
    </button>
  );
};
