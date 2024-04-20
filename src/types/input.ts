import { InputHTMLAttributes } from "react";
import { type FieldValues, UseControllerProps } from "react-hook-form";
import { GroupBase, OptionsOrGroups, type useStateManager } from "react-select";
import { type useAsync } from "react-select/async";

interface IAttribute {
  label?: string;
  className?: string;
}

type TReactHookControllerProps<H extends FieldValues> = UseControllerProps<H>;
type TReactSelectProps = Partial<ReturnType<typeof useStateManager>>;
type TReactAsyncSelectProps = Partial<typeof useAsync>;

// & {
//   defaultOptions?:
//     | boolean
//     | OptionsOrGroups<unknown, GroupBase<unknown>>
//     | undefined;

//   loadOptions?:
//     | ((
//         inputValue: string,
//         callback: (
//           options: OptionsOrGroups<unknown, GroupBase<unknown>>
//         ) => void
//       ) => void | Promise<OptionsOrGroups<unknown, GroupBase<unknown>>>)
//     | undefined;
// };

type TTextInput<I extends FieldValues> = Pick<IAttribute, "label"> &
  Omit<InputHTMLAttributes<HTMLInputElement>, "defaultValue" | "name"> &
  TReactHookControllerProps<I>;

type TSelectInput<I extends FieldValues> = IAttribute &
  TReactHookControllerProps<I> &
  TReactSelectProps;

type TAsyncSelectInput<I extends FieldValues> = IAttribute &
  TReactHookControllerProps<I> &
  TReactAsyncSelectProps;

export interface PTextInput<T extends FieldValues> extends TTextInput<T> {}
export interface PSelectInput<T extends FieldValues> extends TSelectInput<T> {}
export interface PAsyncSelectInput<T extends FieldValues>
  extends TAsyncSelectInput<T> {}
