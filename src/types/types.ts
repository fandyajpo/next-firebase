import { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { StaticImageData } from "next/image";
import { EPermissionField } from "./enums";

export type TFormMethod = "UPDATE" | "INSERT";
interface IAudit {
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
}

export type TImageKitFile = {
  url: string;
  name: string;
  id: string;
};

export interface IScreen {
  id?: string;
  image?: string | StaticImageData;
  imageStyle?: string;
  color?: string;
  className?: string;
  children: React.ReactNode;
}

export interface ISocialMedia {
  linkedin: string;
  instagram: string;
  website: string;
}

export interface IPortofolio {
  id: string;
  image: string;
  title: string;
  description: string;
  link: string;
}

export type TFormResponse = {
  message?: string;
  codeName?: string;
};

export type TUserPermission = {
  permission: Array<keyof typeof EPermissionField>;
};

export type TUser = {
  id: string;
  password: string;
  photoUrl: string;
  username: string;
  email: string;
  nim: string;
  phone: string;
  bio: string;
  tag: string[];
  socialMedia: ISocialMedia;
  portofolio: IPortofolio[] | IPortofolio["id"][];
} & IAudit &
  TUserPermission;

export type TTag = {
  id: string;
  name: string;
} & IAudit;

export type TRole = {
  id: string;
  name: string;
} & IAudit;

export type RevampUser = TUser & { confirmPassword: string };
export type RevampPortofolio = Partial<IPortofolio>;

export type TFetcher<T> = {
  status: boolean;
  data?: T | null;
  statusText?: AxiosResponse<any, any> | string;
  code?: number | AxiosResponse<any, any>;
  error?: Error | undefined | object | string | unknown;
  config?: InternalAxiosRequestConfig<any> | undefined;
};

export type TNavigation = {
  name: string;
  route: string;
  granted: string[];
  type: TNavigationType;
};
export type TNavigationType = "LINK" | "ROUTER";

export type TServerPageProps<P, S> = {
  params?: P;
  searchParams?: S;
};

export type TLogin = Pick<TUser, "email" | "password">;
