import { createThemeSessionResolver } from "remix-themes"
import {createCookieSessionStorage} from "@remix-run/node";

const isProduction = process.env.NODE_ENV === "production"

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "theme",
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secrets: [process.env.APP_SECRET as string],
    ...(isProduction
      ? { domain: process.env.APP_DOMAIN, secure: true }
      : {}),
  },
})

export const themeSessionResolver = createThemeSessionResolver(sessionStorage)
