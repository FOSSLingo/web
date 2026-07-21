import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";
import { promises as fs } from "fs"
import path from "path";

export default getRequestConfig(async () => {
  const messagesDir: string = path.join(process.cwd(), 'messages')
  const messagesFiles: string[] = await fs.readdir(messagesDir)
  
  const supportedLocales = messagesFiles.map(
    file => file.replace(".json", "") // ? bet you weren't expecting this trick up my sleeve
  )

  const headersList = await headers()
  let headersLanguage: string = headersList.get('accept-language') ?? "en"
  
  let language = headersLanguage.split("-")[0]

  if (!supportedLocales.includes(language)) {
    language = "en"
  }

  const locale = language

  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default
  }
})