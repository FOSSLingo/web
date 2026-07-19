'use client'

import { useTheme } from "next-themes"
import { useEffect } from "react"
import Cookie from 'js-cookie'

export function WhatIsTheTheme() {
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    if (resolvedTheme) {
      Cookie.set('theme', resolvedTheme, {expires: 365});
    }
  }, [resolvedTheme])

  return null
}