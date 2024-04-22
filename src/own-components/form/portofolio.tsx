"use client";

import { documentById } from "@/lib/listFunc";
import { type SubmitHandler, useForm } from "react-hook-form";
import type { IPortofolio, TFormMethod, TServerPageProps } from "@/types/types";
import {
  TextInput,
  SelectInput,
  ToggleInput,
  CheckboxInput,
  RadioInput,
  AsyncSelectInput,
  AreaInput,
} from "@/own-components/architect/input";
import {
  usePortofolioById,
  useInsertPortofolio,
} from "@/client/query/portofolio";
import Block from "@/own-components/layout/block";

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
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <Block className="h-2" />
        <AreaInput
          control={control}
          name="description"
          label="Description"
          placeholder="Input description"
        />
        {/* <TextInput
          control={control}
          name="description"
          label="Description"
          placeholder="Input description"
        />
        <SelectInput
          options={[
            { label: "csa", value: "sa" },
            { label: "fafa", value: "fafa" },
          ]}
          label="Title"
          control={control}
          name="title"
        />
        <AsyncSelectInput
          defaultOptions={[{ label: "csa", value: "sa" }]}
          label="Id"
          control={control}
          name="id"
          loadOptions={(input) =>
            Promise.resolve([{ label: "cas", value: "cas" }])
          }
        /> */}

        {/* <ToggleInput
          value={"miu"}
          control={control}
          name="active"
          label="Active"
          placeholder="Input description"
        /> */}
        <CheckboxInput
          control={control}
          name="active"
          label="Active"
          placeholder="Input description"
        />

        <RadioInput
          value={"hai"}
          control={control}
          name="active"
          label="Tets"
          placeholder="Input description"
        />
        <RadioInput
          value={"miu"}
          control={control}
          name="active"
          label="Active"
          placeholder="Input description"
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
