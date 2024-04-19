import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

// export default authMiddleware({
//   publicRoutes: ["/", "/tos", "/privacy-policy", "/api/update-page", "/website", "/settings", "/sites", "/app/(.*)",  "/builder/(.*)", "/api/get-user-info", "/api/get-info", "/api/payment/webhook", "/api/get-page-schema", "/api/get-publish-page"],

//   beforeAuth(req) {
//     const url = req.nextUrl;
//     const searchParams = req.nextUrl.searchParams.toString();

//     let hostname = req.headers
//     .get("host")!
//     .replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);
//     const path = `${url.pathname}${
//       searchParams.length > 0 ? `?${searchParams}` : ""
//     }`;

//       // rewrites for app pages
//     if (hostname == `app.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}` && !path.includes('api')) {
//       return NextResponse.rewrite(
//         new URL(`/app${path === "/" ? "" : path}`, req.url),
//       );
//     }

//     if (
//       hostname === "localhost:3000" ||
//       hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN
//     ) {
//       return NextResponse.rewrite(
//         new URL(`${path === "/" ? "" : path}`, req.url),
//       );
//     }

//     if (!path.includes('api')) {

//       return NextResponse.rewrite(new URL(`/${hostname}${path}`, req.url));
//     }

//   },

//   afterAuth(auth, req, evt) {
//     if (!auth.userId && !auth.isPublicRoute) {
//       if (auth.isApiRoute) {
//         return NextResponse.json(
//           { code: -2, message: "no auth" },
//           { status: 401 }
//         );
//       } else {
//         return NextResponse.redirect(new URL("/sign-in", req.url));
//       }
//     }

//     return NextResponse.next();
//   },
// });

// export const config = {
//   matcher: ["/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)", "/", "/(api|trpc)(.*)"],
// };


export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const searchParams = req.nextUrl.searchParams.toString();

  let hostname = req.headers
  .get("host")!
  .replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);
  const path = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ""
  }`;

    // rewrites for app pages
  if (hostname == `app.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) {
    if (url.href.includes('tryout')) {
      return NextResponse.rewrite(
        new URL(`/app${path === "/" ? "" : path}`, req.url),
      );
    }
    const session = await getToken({ req });
    if (!session && path !== "/login") {
      return NextResponse.redirect(new URL("/login", req.url));
    } else if (session && path == "/login") {
      return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.rewrite(
      new URL(`/app${path === "/" ? "" : path}`, req.url),
    );
  }

  console.log('*********1', hostname)
  if (
    hostname === "localhost:3000" ||
    hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN
  ) {
    return NextResponse.rewrite(
      new URL(`${path === "/" ? "" : path}`, req.url),
    );
  }

  if (!path.includes('api')) {
    return NextResponse.rewrite(new URL(`/${hostname}${path}`, req.url));
  }
}
