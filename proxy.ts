import { NextRequest, NextResponse } from "next/server";

function isServerActionPost(request: NextRequest) {
  if (request.method !== "POST") return false;
  const head = request.headers;
  return Boolean(head.get("Next-Action") ?? head.get("next-action"));
}

export default async function proxy(request: NextRequest) {
  if (isServerActionPost(request)) {
    return NextResponse.next();
  }
  const { auth } = await import("@/lib/auth/server");
  return auth.middleware({ loginUrl: "/auth/sign-in" })(request);
}

export const config = {
  matcher: ["/((?!api/auth|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
