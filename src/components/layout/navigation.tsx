"use client";
import { TNavigation } from "@/types/types";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

interface Props {
  navigations: TNavigation[];
}

const Navigation = (props: Props) => {
  const segment = useSelectedLayoutSegments();
  return (
    <div className="p-4 w-full h-full bg-white">
      <div className="flex flex-row overflow-x-auto w-full lg:flex-col gap-1">
        {props.navigations.map((nav: TNavigation) => {
          return (
            <Link
              href={nav.route}
              key={nav.name}
              className={`hover:bg-blue-500 rounded-full before border lg:rounded hover:text-white duration-100 py-2 px-8 lg:px-2 ${
                segment.includes(nav.name.toLowerCase())
                  ? "bg-blue-500 text-white"
                  : null
              }`}
            >
              {nav.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
