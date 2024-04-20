import { TServerPageProps } from "@/types/types";

const PortofolioId = (props: TServerPageProps<{ id: string }, {}>) => {
  return <pre>{JSON.stringify(props.params?.id, null, 2)}</pre>;
};

export default PortofolioId;
