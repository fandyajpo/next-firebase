"use client";
import { PropsWithChildren } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import Screen from "./screen";
import Navigation from "./navigation";
import { navigations } from "@/lib/listFunc";
import { ERouteSegment } from "@/types/enums";
interface Props extends PropsWithChildren {}

const Sidebar = ({ children }: Props) => {
  const segment = useSelectedLayoutSegment() as ERouteSegment;
  const isUsed = ![
    ERouteSegment.Slash,
    ERouteSegment.Auth,
    ERouteSegment.NotFound,
    ERouteSegment.General,
  ].includes(segment ?? ERouteSegment.Slash);
  return (
    <div className={`${isUsed ? "flex flex-col lg:flex-row" : null}`}>
      {isUsed ? (
        <div className="bg-white-500 h-full sticky lg:w-44 top-0 z-20">
          <Navigation navigations={navigations} />
        </div>
      ) : null}

      {![ERouteSegment.Auth, ERouteSegment.NotFound].includes(
        segment ?? ERouteSegment.Slash
      ) ? (
        <Screen className="w-full">{children}</Screen>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export default Sidebar;
