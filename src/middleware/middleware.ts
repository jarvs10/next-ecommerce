import { withAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";

export { default } from "next-auth/middleware";

export const middleware = (req: NextRequest) => {
  return withAuth(req);
}

export const config = {
  matcher: ["/new"]
};
