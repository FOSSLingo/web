"use client"

import Link from "next/link"

import { useTranslations } from "next-intl";

import { Footer } from "@/src/components/footer";
import { NavBar } from "@/src/components/navbar";



export default function Credits() {
  const t = useTranslations('CreditsPage')
  return (
    <>
      <NavBar/>
      <main>
        <section className="flex min-h-[10vh] sm:min-h-[40vh] md:min-h-[30vh] lg:min-h-[20vh] flex-col items-center justify-center px-6 text-center">
          <h1 className="max-w-4xl text-4xl font-bold md:text-5xl lg:text-6xl">
            {t("title")}
          </h1>
        </section>
        <hr className='border-neutral-800'/>
        <section className="flex min-h-[30vh] flex-col items-center justify-center p-6">
          
        </section>
        <hr className='border-neutral-800'/>
        <section className="flex sm:min-h-[30vh] md:min-h-[20vh] lg:min-h-[10vh] xl:min-h-[0vh] flex-col items-center justify-center p-6 px-23">
          <p>{t("disclaimer")}&nbsp;</p>
        </section>
        <Footer/>
      </main>
    </>
  )
}