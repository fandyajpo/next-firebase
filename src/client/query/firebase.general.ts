import { app } from "@/client/firebase";
import { ECol } from "@/types/enums";
import { deleteField, doc, getFirestore } from "firebase/firestore";
import { useMutation } from "@tanstack/react-query";
export const useRemoveField = () => {
  const mutationFn = async () => deleteField();

  return useMutation({
    mutationFn,
    onSuccess: () => console.log("Success"),
    onError: (error: Error) => console.log(error),
  });
};
