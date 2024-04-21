import Block from "@/components/layout/block";
import type {
  ISelectInput,
  ITextInput,
  IAsyncSelectInput,
  TController,
} from "@/types/input";
import { Controller, FieldValues } from "react-hook-form";
import Select from "react-select";
import AsyncSelect from "react-select/async";

/**
 * @author Fandy
 * @returns Bergantung pada field yang kamu gunakan
 * @description Jika kamu menambahkan onChange pada saat menggunakan component TextInput, maka nilai field tidak akan berubah didepan, sebaiknya kamu gunakan onChange pada saat ingin langsung mendapatkan nilai keluaran dari input
 */
export const TextInput = <T extends FieldValues>(props: ITextInput<T>) => {
  const controller: TController<ITextInput<T>> = props;
  return (
    <Controller
      render={({ field, fieldState }) => (
        <div className="flex flex-col">
          <label htmlFor={props.name ?? ""} className="flex justify-between">
            <span>{props?.label + " " ?? ""}</span>
            <span className="text-xs text-red-500">
              {fieldState?.error && fieldState?.error?.type === "required"
                ? "Required*"
                : null}
            </span>
          </label>
          <Block className="h-1" />
          <input
            {...field}
            {...props}
            className={`${
              props.className ?? "rounded"
            } disabled:bg-gray-200 disabled:text-gray-500 w-full shadow-sm disabled:cursor-not-allowed disabled:border-gray-300`}
            id={props.name ?? ""}
          />
        </div>
      )}
      {...controller}
    />
  );
};

/**
 * @author Fandy
 * @returns Bergantung pada field yang kamu gunakan
 * @description Jika kamu menambahkan onChange pada saat menggunakan component TextInput, maka nilai field tidak akan berubah didepan, sebaiknya kamu gunakan onChange pada saat ingin langsung mendapatkan nilai keluaran dari input
 */
export const SelectInput = <T extends FieldValues>(props: ISelectInput<T>) => {
  const controller: TController<ISelectInput<T>> = props;
  return (
    <Controller
      render={({ field, fieldState }) => (
        <div className="flex flex-col">
          <label htmlFor={props.name ?? ""} className="flex justify-between">
            <span>{props?.label ?? "" + " " ?? ""}</span>
            <span className="text-xs text-red-500">
              {fieldState?.error && fieldState?.error?.type === "required"
                ? "Required*"
                : null}
            </span>
          </label>
          <Block className="h-1" />
          <Select
            {...field}
            {...props}
            isDisabled={props?.disabled}
            id={props.name ?? ""}
            className={`${
              props.className ?? "rounded"
            } disabled:bg-gray-200 disabled:text-gray-500 w-full shadow-sm disabled:cursor-not-allowed disabled:border-gray-300`}
          />
        </div>
      )}
      {...controller}
    />
  );
};

export const AsyncSelectInput = <T extends FieldValues>(
  props: IAsyncSelectInput<T>
) => {
  const controller: TController<IAsyncSelectInput<T>> = props;
  return (
    <Controller
      render={({ field, fieldState }) => (
        <div className="flex flex-col">
          <label htmlFor={props.name ?? ""} className="flex justify-between">
            <span>{props?.label ?? "" + " " ?? ""}</span>
            <span className="text-xs text-red-500">
              {fieldState?.error && fieldState?.error?.type === "required"
                ? "Required*"
                : null}
            </span>
          </label>
          <Block className="h-1" />
          <AsyncSelect
            {...field}
            {...props}
            isDisabled={props?.disabled}
            id={props.name ?? ""}
            className={`${
              props.className ?? "rounded"
            } disabled:bg-gray-200 disabled:text-gray-500 w-full shadow-sm disabled:cursor-not-allowed disabled:border-gray-300`}
          />
        </div>
      )}
      {...controller}
    />
  );
};

export const RadioInput = () => {};

export const CheckboxInput = () => {};

export const AreaInput = () => {};
