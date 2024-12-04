import { NextRequest, NextResponse } from "next/server";

const OLD_BLOGS = [
  {
    match: new RegExp("uncommon-javascript-notes"),
    redirect: "https://notes.xuankhoatu.com/js",
  },
];

export const config = {
  matcher: ["/blogs/:blog_id*"],
};

export function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;

  if (pathName.includes("blogs")) {
    let newPath = pathName.replaceAll("_", "-");

    for (const segment of OLD_BLOGS) {
      if (segment.match.test(newPath)) return NextResponse.redirect(new URL(segment.redirect));
    }

    if (pathName.includes("_")) {
      if (request.nextUrl.hash) newPath += request.nextUrl.hash;
      return NextResponse.redirect(new URL(newPath, request.url));
    }
  }
}
