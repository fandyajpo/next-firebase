import { DecodedIdToken } from "firebase-admin/auth";
import { getIronSession, IronSession, SessionOptions } from "iron-session";
import { cookies } from "next/headers";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
export const USERTOKEN: string = "InstikiDev";

export const sessionOptions: SessionOptions = {
  password: String(process.env.IRON_SECRET_COOKIE_PASSWORD),
  cookieName: USERTOKEN,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export const getSession = async (
  cookie: ReadonlyRequestCookies
): Promise<IronSession<{ data: DecodedIdToken }>> => {
  const session: IronSession<{ data: DecodedIdToken }> = await getIronSession(
    cookie,
    sessionOptions
  );
  return session;
};

export const saveSess = async (
  session: IronSession<{ data: DecodedIdToken }>,
  r: DecodedIdToken
) => {
  session.data = r;
  await session.save();
};
