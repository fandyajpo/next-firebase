import { ECol, EQKey } from "@/types/enums";
import { fetcher } from "@/lib/fetcher";
import { useMutation, useQuery } from "@tanstack/react-query";
import { RevampUser, TLogin, TUser } from "@/types/types";

// FIREBASE
import { app } from "@/client/firebase";
import { getFirestore } from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import { collection, doc, setDoc } from "firebase/firestore";
import {
  getAuth,
  getIdTokenResult,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  IdTokenResult,
} from "firebase/auth";
import { noValueCheck } from "@/lib/listFunc";

const getToken = async (payload: TLogin) => {
  try {
    const auth = getAuth(app);
    const user = await signInWithEmailAndPassword(
      auth,
      payload?.email,
      payload?.password
    );
    const { token } = await getIdTokenResult(user.user, true);
    return token;
  } catch (error) {
    throw error;
  }
};

export const useLogin = () => {
  const mutationFn = async (payload: TLogin) => {
    const token = await getToken(payload);
    return fetcher("auth", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  };

  return useMutation({
    mutationFn,
    onSuccess: () => console.log("Success"),
    onError: (error: Error) => console.log(error),
  });
};

export const useRegister = () => {
  const mutationFn = async (payload: RevampUser) => {
    if (payload.password !== payload.confirmPassword)
      throw new FirebaseError(
        "auth/confirmPassword-doesnt-match-with-password",
        "Confirm password doesnt match with password",
        { ...payload }
      );
    const auth = getAuth(app);
    const register = await createUserWithEmailAndPassword(
      auth,
      payload?.email,
      payload?.password
    );

    const firestore = getFirestore(app);
    const firecol = collection(firestore, ECol.User);
    const firedoc = doc(firecol, register.user.uid ?? "");
    return setDoc(firedoc, {
      id: register.user.uid,
      bio: "",
      nim: payload.nim,
      phone: register.user.phoneNumber ?? "",
      email: register.user.email,
      photoUrl: register.user.photoURL ?? "",
      username: register.user.displayName ?? "",
      createdAt: new Date().toISOString(),
    });
  };
  return useMutation({
    mutationFn,
    onSuccess: () => console.log("Success"),
    onError: (error: Error, variables: TUser, context: unknown) =>
      console.log(error, variables, context),
  });
};

export const useDeleteAccount = () => {
  const mutationFn = async (payload: TUser) => {
    // DELETE USER QUERY
  };

  return useMutation({
    mutationFn,
    onSuccess: () => console.log("Success"),
    onError: (error: Error) => console.log(error),
  });
};

export const useCurrentUser = () => {};

export const useSearchUser = (debounceValue: string) => {
  const queryFn = () => {
    // SEARCH QUERY
  };

  const queryKey = [EQKey.Portofolio, debounceValue];

  return useQuery({
    enabled: noValueCheck(debounceValue),
    queryKey,
    queryFn,
  });
};
