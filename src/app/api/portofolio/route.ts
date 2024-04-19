import { app } from "@/lib/firebase";
import { getFirestore } from "firebase-admin/firestore";
import { Col } from "@/types/enums";
export const GET = async () => {
  try {
    const store = getFirestore(app());

    const getPortofolio = await store
      .collection(Col.Portofolio)
      .doc("cas")
      .get();

    if (!getPortofolio.exists) {
      return Response.json({ status: "not ok" });
    }

    return Response.json({ data: getPortofolio.data() });
  } catch (error) {
    return Response.json({ data: {}, message: "something went wrong" });
  }
};
