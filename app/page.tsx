"use client"

import * as Icon from 'react-feather';
import Link from "next/link"
import { Roboto } from 'next/font/google';
import React from 'react';
import { motion } from "motion/react"

const roboto = Roboto({
  subsets: ['latin']
})

export default function Home() {
  return (
    <>
      <div className='p-3 flex justify-between items-center'> {/* Top navbar*/}

        <div className='flex justify-start gap-2'> {/* Top navbar | Left side stuff */}
          <h2 className='font-bold'>FOSSLingo</h2>
          <Link href="/courses">Courses</Link>
          <Link href="/apps">Apps</Link>
          <Link href="/mission">Our Mission</Link>
          <Link href="/license">License</Link>
        </div>

        <div className='flex justify-end'> {/* Top navbar | Right side stuff */} 
          {/* empty for now */}
        </div> {/* Top navbar | Right side stuff */}   

      </div> {/* Top navbar*/}
      <hr
        style={{
          color: '#2C2C2C',
        }}
      />
      <main className="flex flex-col justify-center items-center min-h-[50vh] text-3xl">
        <motion.div 
          className='text'
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h1>A free, open source alternative to Language Learning apps</h1>
          <div /* Container for the buttons, holy crap there are a lot of divs */
            className='flex flex-row gap-5 pt-6 items-center justify-center'
          > 
            <div className='text-black bg-white rounded-xl p-2'> {/* GitHub Button */}
              <Link 
                href="https://github.com/FOSSLingo/"
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${roboto.className, "button"} flex items-center gap-1 text-xl`}>
                  GitHub
                <Icon.GitHub size={30}/>
              </Link>
            </div> {/* GitHub Button */}
            
            <div className='text-white bg-black rounded-xl p-2 border'> {/* GitHub Button */}
              <Link 
                href="https://github.com/FOSSLingo/"
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${roboto.className, "button"} flex items-center gap-1 text-xl`}>
                  Get started
                <Icon.ArrowRight size={30}/>
              </Link>
            </div> {/* GitHub Button */}
          </div>
        </motion.div>
      </main>
    </>
  )
}