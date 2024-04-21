"use client";

import { documentById } from "@/lib/listFunc";
import { type SubmitHandler, useForm } from "react-hook-form";
import type { IPortofolio, TFormMethod, TServerPageProps } from "@/types/types";
import {
  TextInput,
  SelectInput,
  AsyncSelectInput,
} from "@/components/architect/input";
import {
  usePortofolioById,
  useInsertPortofolio,
} from "@/client/query/portofolio";

interface Props extends TServerPageProps<{ id: string }, {}> {
  method: TFormMethod;
}

const PortofolioForm = (props: Props) => {
  const { control, watch, handleSubmit, setValue } = useForm<IPortofolio>();

  const { mutate: insert } = useInsertPortofolio();
  const { data } = usePortofolioById(props.params?.id ?? "");

  const onSubmit: SubmitHandler<IPortofolio> = (data: IPortofolio) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          control={control}
          name="description"
          label="Description"
          placeholder="Input description"
        />
        <SelectInput
          options={[{ label: "csa", value: "sa" }]}
          label="Title"
          control={control}
          name="title"
        />
        <AsyncSelectInput
          defaultOptions={[{ label: "csa", value: "sa" }]}
          label="Title"
          control={control}
          name="id"
          // loadOptions={(input) => {}}
        />
        <pre>{JSON.stringify(watch(), null, 2)}</pre>
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
