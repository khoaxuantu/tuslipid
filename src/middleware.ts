import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;

  if (pathName.includes("blogs") && pathName.includes("_")) {
    let newPath = pathName.replaceAll("_", "-");
    if (request.nextUrl.hash) newPath += request.nextUrl.hash;
    return NextResponse.redirect(new URL(newPath, request.url));
  }
}

export const config = {
  matcher: ["/blogs/:blog_id*"],
};
