import { useMutation } from "@tanstack/react-query";
import {
  collection,
  deleteDoc,
  doc,
  getFirestore,
  setDoc,
  updateDoc,
  deleteField,
} from "firebase/firestore";
import { TRole } from "@/types/types";
import { ECol, EQKey } from "@/types/enums";
import { app } from "@/client/firebase";
export const useInsertRole = () => {
  const mutationFn = (payload: TRole) => {
    const firestore = getFirestore(app);
    const firecol = collection(firestore, ECol.Portofolio);
    const firedoc = doc(firecol, payload.id ?? "");
    return setDoc(firedoc, payload);
  };
  const mutationKey = [EQKey.Portofolio];

  return useMutation({
    mutationKey,
    mutationFn,
    onSuccess: (data: void, variables: TRole, context: unknown) =>
      console.log("Success"),
    onError: (error: Error, variables: TRole, context: unknown) =>
      console.log(error, variables, context),
  });
};

export const useUpdateRole = () => {
  const mutationFn = async (payload: TRole) => {
    const firestore = getFirestore(app);
    const firedoc = doc(firestore, ECol.Portofolio + "/" + payload.id ?? "");
    return updateDoc(firedoc, { ...payload });
  };
  const mutationKey = [EQKey.Portofolio];

  return useMutation({
    mutationKey,
    mutationFn,
    onSuccess: (data: void, variables: TRole, context: unknown) =>
      console.log("Success"),
    onError: (error: Error, variables: TRole, context: unknown) =>
      console.log(error, variables, context),
  });
};

export const useRemoveRole = () => {
  const mutationFn = async (id: TRole["id"]) => {
    const firestore = getFirestore(app);
    const firedoc = doc(firestore, ECol.Portofolio + "/" + id ?? "");
    return deleteDoc(firedoc);
  };
  const mutationKey = [EQKey.Portofolio];

  return useMutation({
    mutationKey,
    mutationFn,
    onSuccess: (data: void, variables: TRole["id"], context: unknown) =>
      console.log("Success"),
    onError: (error: Error, variables: TRole["id"], context: unknown) =>
      console.log(error, variables, context),
  });
};
