import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className: string;
}

const Block = (props: Props) => {
  if (props.children) {
    return <div className={props.className}>{props.children}</div>;
  }

  return <div className={props.className}></div>;
};

export default Block;
