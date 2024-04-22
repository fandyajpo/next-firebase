"use client";
import { ERouteSegment } from "@/types/enums";
import { useSelectedLayoutSegment } from "next/navigation";
import Screen from "./screen";
import Link from "next/link";
const Navbar = () => {
  const segment = useSelectedLayoutSegment() as ERouteSegment;
  return (
    <>
      {![
        ERouteSegment.Auth,
        ERouteSegment.Backend,
        ERouteSegment.NotFound,
      ].includes(segment) ? (
        <header className="bg-gray-50/80 backdrop-blur-sm sticky top-0 z-10 shadow-sm">
          <Screen>
            <div className="">
              <div className="flex items-center justify-between">
                <div className="sm:text-left">
                  <h1 className="text-xl font-bold text-gray-900">
                    IDC Community
                  </h1>
                  <p className="mt-1 text-sm text-gray-500">
                    {"Get in touch with us! 🎉"}
                  </p>
                </div>

                <div className="flex gap-1 lg:gap-2 sm:items-center">
                  <Link
                    href={"/register"}
                    className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
                    type="button"
                  >
                    <span className="text-sm font-medium">Register</span>
                  </Link>

                  <Link
                    href={"/login"}
                    className="block rounded-lg bg-indigo-600 px-3 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                    type="button"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </Screen>
        </header>
      ) : null}
    </>
  );
};

export default Navbar;
