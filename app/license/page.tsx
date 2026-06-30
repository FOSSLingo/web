"use client"

import * as Icon from 'react-feather';
import Link from "next/link"
import Image from 'next/image';
import { Roboto } from 'next/font/google';
import React from 'react';
import { motion } from "motion/react"

const roboto = Roboto({
  subsets: ['latin']
})

export default function Home() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4 p-4"> {/* Top navbar*/}

        <div className="flex flex-wrap items-center gap-4"> {/* Top navbar | Left side stuff */}
          <Link href="/" className='font-bold'>FOSSLingo</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/apps">Apps</Link>
          <Link href="/mission">Our Mission</Link>
        </div>

        <div className='flex justify-end'> {/* Top navbar | Right side stuff */} 
          <Link href="/license">License</Link>
        </div> {/* Top navbar | Right side stuff */}   

      </div> {/* Top navbar*/}
      {/* <hr style={{ color: '#2C2C2C' }}/> */}
      <hr className='border-neutral-800'/>
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
                  <Icon.GitHub size={30}/>
                </Link>
              </motion.button> {/* GitHub Button */}
              
              <motion.button /* Get Started Button */
                className='text-white bg-black rounded-xl p-2 border'
                whileHover={{ scale: 1.1 }}
              >
                <Link 
                  href="https://github.com/FOSSLingo/"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`${roboto.className, "button"} flex items-center gap-1 text-xl`}>
                    Get started
                  <Icon.ArrowRight size={30}/>
                </Link>
              </motion.button> {/* Get Started Button */}

              
            </div>
          </motion.div>
        </section>
        <hr className='border-neutral-800'/>
      </main>
    </>
  )
}