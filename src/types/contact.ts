type TSource = "SOCIAL_MEDIA" | "FRIEND" | "NONE";

export interface IContactUs {
  email: string;
  message: string;
  source: TSource;
}
