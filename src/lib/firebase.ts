import admin, { type ServiceAccount } from "firebase-admin";
import serviceAccount from "@serviceAccount";
import { App, getApps } from "firebase-admin/app";

export const app = (): App => {
  const intance = getApps();
  if (intance.length <= 0)
    return admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as ServiceAccount),
    });

  return intance[0];
};
