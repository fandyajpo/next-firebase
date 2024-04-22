"use client";

import { IScreen } from "@/types/types";
import Image from "next/image";
const Screen = (props: IScreen) => {
  return (
    <section
      key={props.id}
      id={props.id}
      className={`flex flex-col items-center ${props?.className ?? null}`}
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
      <div className="sm:max-w-3xl md:max-w-5xl lg:max-w-6xl duration-100 xl:max-w-screen-lg 2xl:max-w-screen flex flex-col grow w-full h-full p-4">
        {props.children}
      </div>
    </section>
  );
};

export default Screen;
