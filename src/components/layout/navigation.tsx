"use client";
import { TNavigation } from "@/types/types";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

interface Props {
  navigations: TNavigation[];
}

const Navigation = (props: Props) => {
  const segments = useSelectedLayoutSegments();
  return (
    <div className="p-4 h-screen">
      <pre>{JSON.stringify(segments, null, 2)}</pre>
      <div className="flex flex-col gap-1">
        {props.navigations.map((nav: TNavigation) => {
          return (
            <Link
              href={nav.route}
              key={nav.name}
              className="hover:bg-blue-500 rounded hover:text-white duration-100 p-2"
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
