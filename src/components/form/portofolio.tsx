"use client";

import { documentById } from "@/lib/listFunc";
import { IPortofolio, TFormMethod, TServerPageProps } from "@/types/types";
import { useForm } from "react-hook-form";
import {
  TextInput,
  SelectInput,
  AsyncSelectInput,
} from "@/components/architect/input";
import {
  useInsertPortofolio,
  usePortofolioById,
} from "@/client/query/portofolio";

interface Props extends TServerPageProps<{ id: string }, {}> {
  method: TFormMethod;
}

const PortofolioForm = (props: Props) => {
  const { control, watch, handleSubmit, setValue } = useForm<IPortofolio>();

  const { mutate: insert } = useInsertPortofolio();
  const { data } = usePortofolioById(props.params?.id ?? "");

  const onSubmit = handleSubmit((data: IPortofolio) => {
    console.log(data);
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextInput
          onChange={(e) => console.log(e)}
          control={control}
          name="description"
          label="Description"
          placeholder="Input description"
        />
        <SelectInput
          onChange={(e) => console.log(e)}
          options={[{ label: "csa", value: "sa" }]}
          label="Title"
          control={control}
          name="title"
        />
        <AsyncSelectInput
          // onChange={(e) => console.log(e)}
          // defaultOptions={[{ label: "csa", value: "sa" }]}
          label="Title"
          control={control}
          name="id"
          // loadOptions={(input) => {}}
        />
        <button type="submit">Submit</button>
      </form>

      <button
        onClick={() => documentById("portofolio").showModal()}
        className="outline-none"
      >
        Open
      </button>

      <dialog id="portofolio" className="outline-none">
        Hai Bro
      </dialog>
    </div>
  );
};

export default PortofolioForm;
