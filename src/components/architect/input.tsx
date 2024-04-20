import Divider from "@/components/layout/divider";
import { PSelectInput, PTextInput, PAsyncSelectInput } from "@/types/input";
import { Controller, FieldValues } from "react-hook-form";
import Select from "react-select";
import AsyncSelect from "react-select/async";

/**
 * @author Fandy
 * @returns Bergantung pada field yang kamu gunakan
 * @description Jika kamu menambahkan onChange pada saat menggunakan component TextInput, maka nilai field tidak akan berubah didepan, sebaiknya kamu gunakan onChange pada saat ingin langsung mendapatkan nilai keluaran dari input
 */
export const TextInput = <T extends FieldValues>(props: PTextInput<T>) => {
  return (
    <Controller
      key={props.name ?? ""}
      name={props?.name}
      rules={props?.rules}
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
          <Divider className="h-1" />
          <input
            {...field}
            {...props}
            defaultValue={props?.defaultValue}
            className={`${
              props.className ?? "rounded"
            } disabled:bg-gray-200 disabled:text-gray-500 w-full shadow-sm disabled:cursor-not-allowed disabled:border-gray-300`}
            id={props.name ?? ""}
          />
        </div>
      )}
      control={props.control}
      disabled={props?.disabled}
      defaultValue={props?.defaultValue}
      shouldUnregister={props?.shouldUnregister}
    />
  );
};

/**
 * @author Fandy
 * @returns Bergantung pada field yang kamu gunakan
 * @description Jika kamu menambahkan onChange pada saat menggunakan component TextInput, maka nilai field tidak akan berubah didepan, sebaiknya kamu gunakan onChange pada saat ingin langsung mendapatkan nilai keluaran dari input
 */
export const SelectInput = <T extends FieldValues>(props: PSelectInput<T>) => {
  return (
    <Controller
      key={props?.name ?? ""}
      name={props?.name}
      rules={props?.rules}
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
          <Divider className="h-1" />
          <Select
            {...field}
            {...props}
            isDisabled={props?.disabled}
            id={props.name ?? ""}
            className={`${
              props.className ?? "rounded"
            } disabled:bg-gray-200 disabled:text-gray-500 w-full shadow-sm disabled:cursor-not-allowed disabled:border-gray-300`}
            defaultValue={props.defaultValue}
          />
        </div>
      )}
      control={props?.control}
      disabled={props?.disabled}
      defaultValue={props?.defaultValue}
      shouldUnregister={props?.shouldUnregister}
    />
  );
};

export const AsyncSelectInput = <T extends FieldValues>(
  props: PAsyncSelectInput<T>
) => {
  return (
    <Controller
      key={props?.name ?? ""}
      name={props?.name}
      rules={props?.rules}
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
          <Divider className="h-1" />
          <AsyncSelect
            {...field}
            {...props}
            isDisabled={props?.disabled}
            id={props.name ?? ""}
            className={`${
              props.className ?? "rounded"
            } disabled:bg-gray-200 disabled:text-gray-500 w-full shadow-sm disabled:cursor-not-allowed disabled:border-gray-300`}
            defaultValue={props.defaultValue}
          />
        </div>
      )}
      control={props?.control}
      disabled={props?.disabled}
      defaultValue={props?.defaultValue}
      shouldUnregister={props?.shouldUnregister}
    />
  );
};

export const RadioInput = () => {};

export const CheckboxInput = () => {};

export const AreaInput = () => {};
