"use client"

import Link from "next/link"
import { Roboto } from 'next/font/google';

import { Footer } from "@/src/components/footer";
import { NavBar } from "@/src/components/navbar";

const roboto = Roboto({
  subsets: ['latin']
})

export default function License() {
  return (
    <>
      <NavBar/>
      <main>
        <section className="flex min-h-[10vh] sm:min-h-[40vh] md:min-h-[30vh] lg:min-h-[20vh] flex-col items-center justify-center px-6 text-center">
          <h1 className="max-w-4xl text-4xl font-bold md:text-5xl lg:text-6xl">
            Courses
          </h1>
        </section>
        <hr className='border-neutral-800'/>
        <section className="flex min-h-[10vh] sm:min-h-[40vh] md:min-h-[30vh] lg:min-h-[20vh] flex-col items-center justify-center p-6">
          <div className='text-center'>
            <p className="max-w-2xl text-lg md:text-xl">
              FOSSLingo is a project, currently only maintained by one person.
              As such, there is currently only going to be one course:
              <br/><strong>Spanish (Worldwide)</strong>.<br/> Once the project gains
              more attention, more languages can, and will be added down the road.
            </p>
          </div>
        </section>
        <hr className="border-neutral-800"/>
        <section className="flex min-h-[10vh] sm:min-h-[40vh] md:min-h-[30vh] lg:min-h-[20vh] flex-col items-center justify-center p-6">
          <div className='text-center'>
            <h2 className="text-2xl">Why was Spanish chosen?</h2>
            <p className="max-w-2xl text-lg md:text-xl">
              Spanish was chosen as I have a friend that is fluent
              in Spanish (from a Spanish speaking country), as such
              it will be easy to make a Spanish course as the first
              course for FOSSLingo
            </p>
          </div>
        </section>
        <Footer/>
      </main>
    </>
  )
}