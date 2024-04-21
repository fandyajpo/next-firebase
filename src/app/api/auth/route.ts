import { app } from "@/server/firebase";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "firebase-admin";
import { DecodedIdToken } from "firebase-admin/auth";
import { cookies } from "next/headers";
import { getSession } from "@/server/iron-session";
export const POST = async (req: NextRequest) => {
  try {
    const authorization = req.headers.get("authorization");
    const session = await getSession(cookies());

    if (!authorization)
      return NextResponse.json({
        status: false,
        message: "Header - [authorization] is required*",
      });

    const token = authorization.replace("Bearer ", "");
    const authCheck = auth(app());

    const verifyToken: DecodedIdToken = await authCheck.verifyIdToken(
      token,
      true
    );

    if (!verifyToken)
      return NextResponse.json({
        status: false,
        message: "Auth - [token] is not valid*",
      });

    console.log(verifyToken);

    session.data = verifyToken;
    await session.save();
    return NextResponse.json({
      status: true,
      message: "Auth - [status] success",
    });
  } catch (error) {
    return NextResponse.json({
      error,
      status: false,
      message: "Something went wrong",
    });
  }
};

export const GET = async (req: NextRequest) => {
  try {
    const authorization = req.headers.get("authorization");
    if (!authorization)
      return NextResponse.json({
        status: false,
        message: "Header - [authorization] is required*",
      });
    const session = await getSession(cookies());
    return NextResponse.json({
      data: session?.data,
      status: true,
      message: "User profile",
    });
  } catch (error) {
    return NextResponse.json({
      error,
      status: false,
      message: "Something went wrong",
    });
  }
};
