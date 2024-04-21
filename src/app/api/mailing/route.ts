import { HttpStatusCode } from "axios";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  return NextResponse.json({ status: "ok" }, { status: HttpStatusCode.Ok });
};
