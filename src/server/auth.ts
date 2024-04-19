"use server";
import { app } from "@/lib/firebase";

export const registerAccount = async <T>(prevState: T, data: FormData) => {
  try {
    const username = data.get("username");
    const password = data.get("password") as string;

    console.log(username, password);

    return {};
  } catch (error) {
    throw error;
  }
};
