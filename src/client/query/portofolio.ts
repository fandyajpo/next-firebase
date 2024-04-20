import {
  doc,
  setDoc,
  updateDoc,
  collection,
  getFirestore,
  deleteDoc,
  getDocs,
  query,
  QueryConstraint,
  limit,
  getDoc,
} from "firebase/firestore";
import { noValueCheck } from "@/lib/listFunc";
import { useMutation, useQuery } from "@tanstack/react-query";
import { app } from "@/client/firebase";
import { ECol, EQKey } from "@/types/enums";
import { IPortofolio, RevampPortofolio } from "@/types/types";

export const usePortofolio = (...queryConstraints: QueryConstraint[]) => {
  const queryKey = [EQKey.Portofolio, ...queryConstraints];
  const queryFn = async () => {
    const firestore = getFirestore(app);
    const firecol = collection(firestore, ECol.Portofolio);
    const q = query(firecol, ...queryConstraints, limit(1));
    const getFiredoc = await getDocs(q);
    const data = getFiredoc.docs.map((s) => s.data());

    return { data };
  };
  return useQuery({
    queryKey,
    queryFn,
  });
};

export const usePortofolioById = (id: string) => {
  const queryFn = () => {
    const firestore = getFirestore(app);
    const firecol = collection(firestore, ECol.Portofolio);
    const firedoc = doc(firecol, id ?? "");
    return getDoc(firedoc);
  };
  const queryKey = [EQKey.Portofolio, id];

  return useQuery({
    enabled: noValueCheck(id),
    queryKey,
    queryFn,
  });
};

export const useInsertPortofolio = () => {
  const mutationFn = (payload: IPortofolio) => {
    const firestore = getFirestore(app);
    const firecol = collection(firestore, ECol.Portofolio);
    const firedoc = doc(firecol, payload.id ?? "");
    return setDoc(firedoc, payload);
  };
  const mutationKey = [EQKey.Portofolio];

  return useMutation({
    mutationKey,
    mutationFn,
    onSuccess: (data: void, variables: IPortofolio, context: unknown) =>
      console.log("Success"),
    onError: (error: Error, variables: IPortofolio, context: unknown) =>
      console.log(error, variables, context),
  });
};

export const useUpdatePortofolio = () => {
  const mutationFn = async (payload: RevampPortofolio) => {
    const firestore = getFirestore(app);
    const firedoc = doc(firestore, ECol.Portofolio + "/" + payload.id ?? "");
    return updateDoc(firedoc, { ...payload });
  };
  const mutationKey = [EQKey.Portofolio];

  return useMutation({
    mutationKey,
    mutationFn,
    onSuccess: (data: void, variables: IPortofolio, context: unknown) =>
      console.log("Success"),
    onError: (error: Error, variables: IPortofolio, context: unknown) =>
      console.log(error, variables, context),
  });
};

export const useRemovePortofolio = () => {
  const mutationFn = async (id: IPortofolio["id"]) => {
    const firestore = getFirestore(app);
    const firedoc = doc(firestore, ECol.Portofolio + "/" + id ?? "");
    return deleteDoc(firedoc);
  };
  const mutationKey = [EQKey.Portofolio];

  return useMutation({
    mutationKey,
    mutationFn,
    onSuccess: (data: void, variables: IPortofolio["id"], context: unknown) =>
      console.log("Success"),
    onError: (error: Error, variables: IPortofolio["id"], context: unknown) =>
      console.log(error, variables, context),
  });
};
