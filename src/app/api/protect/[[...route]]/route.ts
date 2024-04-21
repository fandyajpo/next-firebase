import { getFirestore } from "firebase-admin/firestore";
import { app } from "@/server/firebase";
import { Hono } from "hono";
import { ECol } from "@/types/enums";
import { handle } from "hono/vercel";

const h = new Hono().basePath("/api/protect");
// export const runtime = "edge";

h.get("/", async (c) => {
  try {
    // const store = getFirestore(app());

    // const portofolio = store.collection(ECol.Portofolio).doc("cog");

    // const getPortofolio = await portofolio.get();

    // const isExist = getPortofolio.exists;

    // if (!isExist)
    //   return c.json({
    //     data: null,
    //     message: "Ga ada data",
    //   });

    // const data = getPortofolio.data();

    return c.json({
      message: "Hello hone",
    });
  } catch (error) {
    return c.json(error);
  }
});

// h.get("/test", (c) => {
//   return c.json({
//     message: "Hello Hono.js!",
//   });
// });

export const GET = handle(h);
export const POST = handle(h);
