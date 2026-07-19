"use client"

import * as FeatherIcons from 'react-feather';
import Link from "next/link";
import Image from 'next/image';
import { Roboto } from 'next/font/google';
import { motion } from "motion/react";

import { Footer } from "@/src/components/footer"
import { NavBar } from '@/src/components/navbar';

import { useTheme } from 'next-themes';

const roboto = Roboto({
  subsets: ['latin']
})

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme()
  return (
    <>
      <NavBar/>
      <main>
        <section className="flex min-h-[50vh] flex-col items-center justify-center px-6 text-center">
          <motion.div 
            className='text'
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="max-w-4xl text-4xl font-bold md:text-5xl lg:text-6xl">
              A free, open source alternative to Language Learning apps
            </h1>
            <div /* Container for the buttons, holy crap there are a lot of divs */
              className='flex flex-col sm:flex-row gap-5 pt-6 items-center justify-center'
            > 
              <motion.button /* Get Started Button */
                className='text-black bg-white rounded-xl p-2 border'
                whileHover={{ scale: 1.1 }}
              >
                <Link 
                  href="https://github.com/FOSSLingo/"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`${roboto.className, "button"} flex items-center gap-1 text-xl`}>
                    GitHub
                  <FeatherIcons.GitHub size={30}/>
                </Link>
              </motion.button> {/* GitHub Button */}
              
              <motion.button /* Get Started Button */
                className='text-white bg-black rounded-xl p-2 border'
                whileHover={{ scale: 1.1 }}
              >
                <Link 
                  href="dash/"
                  rel="noopener noreferrer" 
                  className={`${roboto.className, "button"} flex items-center gap-1 text-xl`}>
                    Get Started
                  <FeatherIcons.ArrowRight size={30}/>
                </Link>
              </motion.button> {/* Get Started Button */}

              
            </div>
          </motion.div>
        </section>
        <hr className='border-neutral-800'/>
        <section className="flex flex-col justify-center items-center min-h-[40vh]">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-12 md:flex-row md:px-12 lg:px-20">
            <div className="w-48 md:w-64 lg:w-80 flex-shrink-0">
              <Link href="https://opensource.org/" target="_blank" rel="noopener noreferrer">
                <Image
                  src={
                  resolvedTheme === "dark"
                    ? "https://i0.wp.com/opensource.org/wp-content/uploads/2009/08/osi_black_and_white_dark_backgrounds_logo_0.png"
                    : "https://i0.wp.com/opensource.org/wp-content/uploads/2009/08/osi_black_and_white_light_backgrounds_logo_0.png"
                  }
                  alt="Open Source Initative Logo"
                  width={320}
                  height={384}
                  loading='eager'
                />
              </Link>
            </div>
            <p className="max-w-2xl text-lg md:text-xl">
              FOSSLingo is an alternative to traditional language learning apps that is Private, 
              Community Maintained, and Open-Source under the AGPLv3 License. I, iddu01, started 
              this project, simply because I think language learning should be free for all.
            </p>
          </div>
        </section>
        <Footer/>
      </main>
    </>
  )
}