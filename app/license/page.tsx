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
        <section className="flex min-h-[30vh] flex-col items-center justify-center px-6 text-center">
          <h1 className="max-w-4xl text-4xl font-bold md:text-5xl lg:text-6xl">
            License
          </h1>
        </section>
        <hr className='border-neutral-800'/>
        <section className="flex min-h-[30vh] flex-col items-center justify-center p-6">
          <div className='text-center'>
            <p className="max-w-2xl text-lg md:text-xl">
              The FOSSLingo website, clients, and backend are licensed under the copyleft GNU Affero General Public License v3.0 (AGPL-3.0).<br /><br />
              But, what does this mean?<br /><br />
            </p>
          </div>
          <p className="max-w-2xl text-lg md:text-xl space-y-6">
            1. If you modify any FOSSLingo <strong>software</strong> and host it for others to use, you must redistribute the modified source code.<br />
            2. The modified source code <strong>must</strong> be released under the same license as the original code, AGPL-3.0.<br/>
            3. You must preserve the original copyright notices, include the AGPL-3.0 license, and make the corresponding source code available to users of your modified version.
          </p>
          <div className='text-center'>
            <p className="max-w-2xl text-lg md:text-xl pt-6">
              <mark className='bg-white p-'>Alternatively, the FOSSLingo language resources (grammar explanations, lessons, vocabulary, and other educational content)
              are licensed under the Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0) unless otherwise noted. This means:</mark><br/><br/>
            </p>
          </div>
          <p className="max-w-2xl text-lg md:text-xl space-y-6">
            1. Attribution (The BY part): In this case, You must provide appropriate attribution to the original author, include a link to the CC BY-SA 4.0 license, and indicate whether changes were made.<br />
            2. If you modify, remix, or transform the original resources, you <strong>must</strong> release the modifications under the same license.
          </p>
        </section>
        <hr className='border-neutral-800'/>
        <section className="flex min-h-[30vh] flex-col items-center justify-center p-6">
          <p>Note: This is not legal advice! This is a very big simplification of the licenses used.</p>
        </section>
      </main>
    </>
  )
}