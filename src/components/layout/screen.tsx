"use client";

import { IScreen } from "@/types/types";
import Image from "next/image";
const Screen = (props: IScreen) => {
  return (
    <section
      key={props.id}
      id={props.id}
      className={`flex flex-col items-center ${props?.className ?? ""}`}
      style={{
        backgroundColor: props.color,
      }}
    >
      {props.image ? (
        <Image
          src={props?.image}
          alt="BackgroundImage"
          className={`object-cover absolute ${props.imageStyle}`}
        />
      ) : null}
      <div className="md:max-w-2xl lg:max-w-4xl duration-500 xl:max-w-7xl w-full flex flex-col items-stretch grow relative flex-shrink-0 gap-x-4">
        {props.children}
      </div>
    </section>
  );
};

export default Screen;
