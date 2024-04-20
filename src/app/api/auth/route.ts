import { app } from "@/server/firebase";
import { NextRequest } from "next/server";
import { auth } from "firebase-admin";
export const GET = async (req: NextRequest) => {
  try {
    console.log("HITT");
    const token = req.headers.get("") as string;

    const authCheck = auth(app());

    const verifyToken = await authCheck.verifyIdToken(token);

    console.log(verifyToken);

    return Response.json({
      status: true,
      message: verifyToken,
    });
  } catch (error) {
    return Response.json({
      error,
      status: false,
      message: "Something went wrong",
    });
  }
};
