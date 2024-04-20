import { useMutation } from "@tanstack/react-query";
import {
  collection,
  deleteDoc,
  doc,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { TTag } from "@/types/types";
import { ECol, EQKey } from "@/types/enums";
import { app } from "@/client/firebase";
export const useInsertTag = () => {
  const mutationFn = (payload: TTag) => {
    const firestore = getFirestore(app);
    const firecol = collection(firestore, ECol.Portofolio);
    const firedoc = doc(firecol, payload.id ?? "");
    return setDoc(firedoc, payload);
  };
  const mutationKey = [EQKey.Portofolio];

  return useMutation({
    mutationKey,
    mutationFn,
    onSuccess: (data: void, variables: TTag, context: unknown) =>
      console.log("Success"),
    onError: (error: Error, variables: TTag, context: unknown) =>
      console.log(error, variables, context),
  });
};

export const useUpdateTag = () => {
  const mutationFn = async (payload: TTag) => {
    const firestore = getFirestore(app);
    const firedoc = doc(firestore, ECol.Portofolio + "/" + payload.id ?? "");
    return updateDoc(firedoc, { ...payload });
  };
  const mutationKey = [EQKey.Portofolio];

  return useMutation({
    mutationKey,
    mutationFn,
    onSuccess: (data: void, variables: TTag, context: unknown) =>
      console.log("Success"),
    onError: (error: Error, variables: TTag, context: unknown) =>
      console.log(error, variables, context),
  });
};

export const useRemoveTag = () => {
  const mutationFn = async (id: TTag["id"]) => {
    const firestore = getFirestore(app);
    const firedoc = doc(firestore, ECol.Portofolio + "/" + id ?? "");
    return deleteDoc(firedoc);
  };
  const mutationKey = [EQKey.Portofolio];

  return useMutation({
    mutationKey,
    mutationFn,
    onSuccess: (data: void, variables: TTag["id"], context: unknown) =>
      console.log("Success"),
    onError: (error: Error, variables: TTag["id"], context: unknown) =>
      console.log(error, variables, context),
  });
};
