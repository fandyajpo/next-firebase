import { type InputHTMLAttributes, type AreaHTMLAttributes } from "react";
import { type FieldValues, type UseControllerProps } from "react-hook-form";
import { useStateManager, type GroupBase } from "react-select";
import { type AsyncProps } from "react-select/async";
interface IAttribute {
  label?: string;
  className?: string;
}

export interface GroupOption {
  label: any;
  value: any;
}

type TReactHookControllerProps<H extends FieldValues> = UseControllerProps<H>;
type TReactSelectProps = Partial<ReturnType<typeof useStateManager>>;

type TTextInput<I extends FieldValues> = Pick<IAttribute, "label"> &
  Omit<InputHTMLAttributes<HTMLInputElement>, "defaultValue" | "name"> &
  TReactHookControllerProps<I>;

type TSelectInput<I extends FieldValues> = IAttribute &
  TReactHookControllerProps<I> &
  TReactSelectProps;

type TAsyncSelectInput<I extends FieldValues> = IAttribute &
  TReactHookControllerProps<I> &
  AsyncProps<GroupOption, boolean, GroupBase<GroupOption>>;

type TAreaInput<I extends FieldValues> = Pick<IAttribute, "label"> &
  TTextInput<I> &
  AreaHTMLAttributes<HTMLTextAreaElement>;

export interface ITextInput<T extends FieldValues> extends TTextInput<T> {}
export interface ICheckboxInput<T extends FieldValues>
  extends Omit<TTextInput<T>, "type"> {}
export interface ISelectInput<T extends FieldValues> extends TSelectInput<T> {}
export interface IAsyncSelectInput<T extends FieldValues>
  extends TAsyncSelectInput<T> {}

export interface IAreaInput<T extends FieldValues> extends TAreaInput<T> {}

export type TController<G extends FieldValues> = Pick<
  G,
  keyof UseControllerProps<G>
>;
