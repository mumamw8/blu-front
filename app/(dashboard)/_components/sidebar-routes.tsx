"use client";

import { Compass, Layout } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Invoices",
    href: "/invoice",
  },
  {
    label: "Estimates",
    href: "/estimate",
  },
  {
    label: "Clients",
    href: "/client",
  },
  {
    label: "Contacts",
    href: "/contact",
  },
  {
    label: "Receipts",
    href: "/receipt",
  },
  {
    label: "Projects",
    href: "/project",
  },
];

export const SidebarRoutes = () => {
  const routes = guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem key={route.href} label={route.label} href={route.href} />
      ))}
    </div>
  );
};
