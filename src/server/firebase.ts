import admin from "firebase-admin";
import { App, getApps } from "firebase-admin/app";

export const app = (): App => {
  const intance = getApps();
  if (intance.length <= 0)
    return admin.initializeApp({
      credential: admin.credential.cert({
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: String(process.env.FIREBASE_PRIVATE_KEY),
        projectId: process.env.FIREBASE_PROJECT_ID,
      }),
    });

  return intance[0];
};
