import { TNavigation } from "@/types/types";

const handleAccess = () => {};

const handleMenu = () => {};

export const navigations: TNavigation[] = [
  { name: "Profile", route: "/bo/profile", granted: [] },
  { name: "Portofolio", route: "/bo/portofolio", granted: [] },
  { name: "Role", route: "/bo/role", granted: [] },
  { name: "Tag", route: "/bo/tag", granted: [] },
  { name: "User", route: "/bo/user", granted: [""] },
];

export const documentById = (id: string) => {
  return document.getElementById?.(id) as any;
};

export const noValueCheck = (value: string) => {
  return value != "" || value != null;
};
