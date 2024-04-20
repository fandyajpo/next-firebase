"use client";
import { useSelectedLayoutSegment } from "next/navigation";
import Screen from "./screen";
import Link from "next/link";
const Navbar = () => {
  const segment = useSelectedLayoutSegment();
  return (
    <>
      {!["(auth)"].includes(segment ?? "") ? (
        <header className="bg-gray-50">
          <Screen>
            <div className="py-4">
              <div className="sm:flex sm:items-center sm:justify-between">
                <div className="text-center sm:text-left">
                  <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    InstikiDev Community
                  </h1>

                  <p className="mt-1.5 text-sm text-gray-500">
                    {"Let's write a new blog post! 🎉"}
                  </p>
                </div>

                <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
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
