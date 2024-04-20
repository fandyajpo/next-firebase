"use client";
import { NOT_FOUND_SEGMENT } from "@/lib/variable/next.not.found";
import { useSelectedLayoutSegment } from "next/navigation";
import Screen from "./screen";
import Link from "next/link";
const Navbar = () => {
  const segment = useSelectedLayoutSegment();
  return (
    <>
      {!["(auth)", "(backend)", NOT_FOUND_SEGMENT].includes(segment ?? "") ? (
        <header className="bg-gray-50">
          <Screen>
            <div className="py-4">
              <div className="flex items-center justify-between">
                <div className="sm:text-left">
                  <h1 className="text-2xl font-bold text-gray-900">
                    InstikiDev Community
                  </h1>
                  <p className="mt-1 text-sm text-gray-500">
                    {"Get in touch with us! 🎉"}
                  </p>
                </div>

                <div className="flex gap-4 sm:items-center">
                  <Link
                    href={"/register"}
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
                    type="button"
                  >
                    <span className="text-sm font-medium">Create Account</span>
                  </Link>

                  <Link
                    href={"/login"}
                    className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
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
