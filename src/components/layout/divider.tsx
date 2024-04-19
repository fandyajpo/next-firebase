interface Props {
  className: string;
}

const Divider = (props: Props) => {
  return <div className={props.className}></div>;
};

export default Divider;
