import { NextRequest } from "next/server";

export default async function proxy(request: NextRequest) {
  const { auth } = await import("@/app/lib/auth/server");
  return auth.middleware({ loginUrl: "/auth/sign-in" })(request);
}
