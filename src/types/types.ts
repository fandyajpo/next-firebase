import { StaticImageData } from "next/image";

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

export type IRole = "STUDENT" | "ADMIN";

export interface ISocialMedia {
  linkedin: string;
  instagram: string;
  website: string;
}

export interface IPortofolio {
  image: string;
  title: string;
  description: string;
  link: string;
}

export type FormResponse = {
  message?: string;
  codeName?: string;
};

export type TUser = {
  confirmPassword: string;
  password: string;
  photoUrl: string;
  username: string;
  email: string;
  nim: string;
  phone: string;
  bio: string;
  tag: string[];
  socialMedia: ISocialMedia;
  portofolio: IPortofolio[];
} & IAudit;
