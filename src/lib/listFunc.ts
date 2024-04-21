import { TNavigation } from "@/types/types";

export const navigations: TNavigation[] = [
  { name: "Profile", route: "/bo/profile", granted: [], type: "ROUTER" },
  { name: "Portofolio", route: "/bo/portofolio", granted: [], type: "ROUTER" },
  { name: "Role", route: "/bo/role", granted: [], type: "ROUTER" },
  { name: "Tag", route: "/bo/tag", granted: [], type: "ROUTER" },
  { name: "User", route: "/bo/user", granted: [""], type: "ROUTER" },
  { name: "Explorer", route: "/", granted: [""], type: "LINK" },
];

export const documentById = (id: string) => {
  return document.getElementById?.(id) as any;
};

export const noValueCheck = (value: string) => {
  return value != "" || value != null;
};

export const handleUsername = (name: string) => {
  const symbol = ["/"];

  return symbol.includes(name);
};
