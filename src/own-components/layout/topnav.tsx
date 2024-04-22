"use client";
import { Title } from "@/own-components/architect/title";
import Block from "@/own-components/layout/block";

interface Props {
  title: string;
  description: string;
  withAddNewButton?: boolean;
}

const TopNav = (props: Props) => {
  return (
    <div className="w-full">
      <div className="py-2 w-full">
        <div className="flex items-center w-full justify-between">
          <div className="sm:text-left">
            <Title>{props.title}</Title>
            <p className="mt-1 text-sm text-gray-500">{props.description}</p>
          </div>

          {props.withAddNewButton ? (
            <div className="flex gap-4 sm:items-center">
              <button
                className="block rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring"
                type="button"
              >
                Add New
              </button>
            </div>
          ) : null}
        </div>
      </div>
      <Block className="h-4 border-b border-blue-600" />
    </div>
  );
};

export default TopNav;
