import Block from "@/own-components/layout/block";
import type {
  ISelectInput,
  ITextInput,
  IAsyncSelectInput,
  IAreaInput,
  ICheckboxInput,
  TController,
} from "@/types/input";
import { Controller, FieldValues } from "react-hook-form";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import { Checkbox } from "@/components/ui/checkbox";
import { Toggle } from "@/components/ui/toggle";
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
          <label
            htmlFor={props.name ?? ""}
            className="flex text-xs justify-between"
          >
            <span>{props?.label + " " ?? ""}</span>
            <span className="text-red-500">
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
            } disabled:bg-gray-200 border px-2 disabled:text-gray-500 w-full shadow-sm disabled:cursor-not-allowed disabled:border-gray-300`}
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
          <label
            htmlFor={props.name ?? ""}
            className="flex text-xs justify-between"
          >
            <span>{props?.label ?? "" + " " ?? ""}</span>
            <span className=" text-red-500">
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

/**
 * @author Fandy
 * @returns Bergantung pada field yang kamu gunakan
 * @description Jika kamu menambahkan onChange pada saat menggunakan component TextInput, maka nilai field tidak akan berubah didepan, sebaiknya kamu gunakan onChange pada saat ingin langsung mendapatkan nilai keluaran dari input
 */
export const AsyncSelectInput = <T extends FieldValues>(
  props: IAsyncSelectInput<T>
) => {
  const controller: TController<IAsyncSelectInput<T>> = props;
  return (
    <Controller
      render={({ field, fieldState }) => (
        <div className="flex flex-col">
          <label
            htmlFor={props.name ?? ""}
            className="flex text-xs justify-between"
          >
            <span>{props?.label ?? "" + " " ?? ""}</span>
            <span className="text-red-500">
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

/**
 * @author Fandy
 * @returns Bergantung pada field yang kamu gunakan
 * @description Jika kamu menambahkan onChange pada saat menggunakan component TextInput, maka nilai field tidak akan berubah didepan, sebaiknya kamu gunakan onChange pada saat ingin langsung mendapatkan nilai keluaran dari input
 */
export const RadioInput = <T extends FieldValues>(props: ICheckboxInput<T>) => {
  const controller: TController<ICheckboxInput<T>> = props;
  return (
    <Controller
      render={({ field, fieldState }) => (
        <label
          htmlFor={props?.label}
          className="flex flex-row gap-2 items-center"
        >
          <div>
            <div className="flex items-center justify-center w-full">
              <div className="relative w-6 h-6">
                <input
                  {...field}
                  {...props}
                  type="radio"
                  id={props?.label}
                  className="hidden w-full h-full peer"
                />
                <div className="peer-checked:bg-blue-500 w-full h-full rounded-full border flex justify-center items-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              </div>
            </div>
          </div>
          <Block className="h-1" />
          <div className="flex text-xs">
            <span>{props?.label + " " ?? ""}</span>
            <span className="text-red-500">
              {fieldState?.error && fieldState?.error?.type === "required"
                ? "Required*"
                : null}
            </span>
          </div>
        </label>
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
export const ToggleInput = <T extends FieldValues>(
  props: ICheckboxInput<T>
) => {
  const controller: Omit<TController<ITextInput<T>>, "label"> = props;
  return (
    <Controller
      render={({ field, fieldState }) => (
        <label
          htmlFor={props?.name}
          className="flex flex-row gap-2 items-center"
        >
          <div>
            <div className="flex items-center justify-center w-full">
              <div className="relative">
                <input
                  {...field}
                  {...props}
                  type="checkbox"
                  id={props?.name}
                  className="sr-only peer transform"
                />
                <div className="block bg-gray-300 w-14 h-8 peer-checked:bg-blue-500 border-gray-gray-500 rounded-full" />
                <div className="dot peer-checked:translate-x-full peer-checked:bg-white absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition" />
              </div>
            </div>
          </div>
          <Block className="h-1" />
          <div className="flex text-xs justify-between">
            <span>{props?.label + " " ?? ""}</span>
            <span className="text-red-500">
              {fieldState?.error && fieldState?.error?.type === "required"
                ? "Required*"
                : null}
            </span>
          </div>
        </label>
      )}
      {...controller}
    />
  );
};

export const CheckboxInput = <T extends FieldValues>(
  props: ICheckboxInput<T>
) => {
  const controller: TController<ITextInput<T>> = props;
  return (
    <Controller
      render={({ field, fieldState }) => (
        <label
          htmlFor={props?.name}
          className="flex flex-row gap-2 items-center"
        >
          <div>
            <div className="flex items-center justify-center w-full">
              <div className="relative">
                <input
                  {...field}
                  {...props}
                  type="checkbox"
                  id={props?.name}
                  className="sr-only peer transform"
                />
                <div className="bg-gray-300 w-6 h-6 peer-checked:bg-blue-500 border-gray-gray-500 rounded-lg flex items-center justify-center">
                  <div className="dot  peer-checked:bg-white absolute bg-white w-2 h-2 rounded-full transition" />
                </div>
              </div>
            </div>
          </div>
          <Block className="h-1" />
          <div className="flex text-xs justify-between">
            <span>{props?.label + " " ?? ""}</span>
            <span className="text-red-500">
              {fieldState?.error && fieldState?.error?.type === "required"
                ? "Required*"
                : null}
            </span>
          </div>
        </label>
      )}
      {...controller}
    />
  );
};

export const AreaInput = <T extends FieldValues>(props: IAreaInput<T>) => {
  const controller: TController<IAreaInput<T>> = props;
  return (
    <Controller
      render={({ field, fieldState }) => (
        <div className="flex flex-col">
          <label
            htmlFor={props.name ?? ""}
            className="flex text-xs justify-between"
          >
            <span>{props?.label + " " ?? ""}</span>
            <span className="text-red-500">
              {fieldState?.error && fieldState?.error?.type === "required"
                ? "Required*"
                : null}
            </span>
          </label>
          <Block className="h-1" />
          <textarea
            {...field}
            {...props}
            className={`${
              props.className ?? "rounded"
            } disabled:bg-gray-200 border px-2 disabled:text-gray-500 w-full shadow-sm disabled:cursor-not-allowed disabled:border-gray-300`}
          />
        </div>
      )}
      {...controller}
    />
  );
};
