"use server"

import { cookies } from "next/headers"

export async function setCourseCookie(courseID: string) {
  const cookieStore = await cookies()

  cookieStore.set("course", courseID, {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  })
}