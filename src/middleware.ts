import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authKey } from "./constance/authKey";
import { verifyToken } from "./utils/verifyToken/verifyToken";
import { USER_ROLE } from "./constance/constance";

const AuthRoutes = ["/login", "/register"];
const commonPrivateRoutes = ["/shop", "/chef"];
type Role = keyof typeof roleBasedPrivateRoutes;
const roleBasedPrivateRoutes = {
  superAdmin: [/^\/dashboard\/superAdmin/],
  admin: [/^\/dashboard\/admin/],
  chef: [/^\/dashboard\/chef/],
  user: [/^\/dashboard\/user/],
};
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = (await cookies()).get(authKey)?.value;
  if (!accessToken) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (
    !accessToken &&
    commonPrivateRoutes.some((route) => pathname.startsWith(route))
  ) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  // If access token exists, check common private routes access
  if (
    (accessToken && commonPrivateRoutes.includes(pathname)) ||
    commonPrivateRoutes.some((route) => pathname.startsWith(route))
  ) {
    return NextResponse.next();
  }

  let decoded = null as any;

  if (accessToken) {
    decoded = verifyToken(accessToken) as any;
  }

  const role = decoded?.role;

  if (
    role === `${USER_ROLE.superAdmin}` &&
    pathname.startsWith("/dashboard/superAdmin")
  ) {
    return NextResponse.next();
  }
  if (
    role === `${USER_ROLE.admin}` &&
    pathname.startsWith("/dashboard/admin")
  ) {
    return NextResponse.next();
  }
  if (role === `${USER_ROLE.chef}` && pathname.startsWith("/dashboard/chef")) {
    return NextResponse.next();
  }
  if (role === `${USER_ROLE.user}` && pathname.startsWith("/dashboard/user")) {
    return NextResponse.next();
  }

  if (role) {
    if (role && roleBasedPrivateRoutes[role as Role]) {
      const routes = roleBasedPrivateRoutes[role as Role];
      if (routes.some((route) => pathname.match(route))) {
        return NextResponse.next();
      }
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/register", "/dashboard/:path*"],
};
