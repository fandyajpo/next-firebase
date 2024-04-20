"use client";
import { PropsWithChildren } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import Screen from "./screen";
import Navigation from "./navigation";
import { navigations } from "@/lib/listFunc";
import { NOT_FOUND_SEGMENT } from "@/lib/variable/next.not.found";
interface Props extends PropsWithChildren {}

const Sidebar = ({ children }: Props) => {
  const segment = useSelectedLayoutSegment();
  const isUsed = !["", "(auth)", NOT_FOUND_SEGMENT].includes(segment ?? "");
  return (
    <div className={`${isUsed ? "flex flex-row" : null}`}>
      {isUsed ? (
        <div className="w-64 bg-white-500 border-r">
          <Navigation navigations={navigations} />
        </div>
      ) : null}

      {!["(auth)", NOT_FOUND_SEGMENT].includes(segment ?? "") ? (
        <Screen>{children}</Screen>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export default Sidebar;
