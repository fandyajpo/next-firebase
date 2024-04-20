import { app } from "@/server/firebase";
import { ECol } from "@/types/enums";
import { getFirestore } from "firebase-admin/firestore";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  const store = getFirestore(app());

  const portofolio = store.collection(ECol.Portofolio).doc("cog");

  const getPortofolio = await portofolio.get();

  const isExist = getPortofolio.exists;

  if (!isExist)
    return Response.json({
      data: null,
      message: "Ga ada data",
    });

  const data = getPortofolio.data();

  return Response.json({
    data,
    message: "ada data",
  });
};
