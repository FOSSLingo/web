"use client"

import Link from "next/link"
import { Roboto } from 'next/font/google';
import { SiAndroid, SiLinux, SiMacos, SiIos, SiNextdotjs } from '@icons-pack/react-simple-icons';

import { Footer } from '@/src/components/footer';
import { NavBar } from "@/src/components/navbar";

const roboto = Roboto({
  subsets: ['latin']
})

export default function Apps() {
  return (
    <>
      <NavBar/>
      <main>
        <section className="flex min-h-[10vh] sm:min-h-[40vh] md:min-h-[30vh] lg:min-h-[20vh] flex-col items-center justify-center px-6 text-center">
          <h1 className="max-w-4xl text-4xl font-bold md:text-5xl lg:text-6xl">
            Apps
          </h1>
        </section>
        <hr className='border-neutral-800'/>
        <section className='flex flex-col items-center justify-center px-6 py-6 text-center gap-6'>
          
          <div className='w-100 h-50 bg-[#0f0f0f] rounded-[40] items-center flex flex-row pr-5'>
            <div className="flex items-center px-5">
              <Link href="https://www.apple.com/os/macos/" target="_blank" rel="noopener noreferrer">
                <SiNextdotjs size={40}/>
              </Link>
            </div>
            <div className="bg-[#1f1f1f] rounded-[40]">
              <p className="p-2">
                The web client is coded in Next.js / React.js. 
                Development has started, but no ETA has been finalized. If you
                are experienced in Next app development and would like to help, 
                create a discussion <Link href="https://github.com/orgs/FOSSLingo/discussions"><strong>here&nbsp;</strong></Link> 
                under "Ideas".
              </p>
            </div>
          </div>
          
          <div className='w-100 h-50 bg-[#0f0f0f] rounded-[40] items-center flex flex-row pr-5'>
            <div className="flex items-center px-5">
              <Link href="https://www.apple.com/os/macos/" target="_blank" rel="noopener noreferrer">
                <SiIos size={40}/>
              </Link>
            </div>
            <div className="bg-[#1f1f1f] rounded-[40]">
              <p className="p-2">
                The iOS Client is planned to be coded in Swift. 
                Development has not started, and no ETA has been finalized. If you
                are experienced in iOS app development, create a discussion <Link href="https://github.com/orgs/FOSSLingo/discussions"><strong>here&nbsp;</strong></Link> 
                under "Ideas".
              </p>
            </div>
          </div>

          <div className='w-100 h-50 bg-[#0f0f0f] rounded-[40] items-center flex flex-row pr-5'>
            <div className="flex items-center px-5">
              <Link href="https://www.apple.com/os/macos/" target="_blank" rel="noopener noreferrer">
                <SiAndroid size={40}/>
              </Link>
            </div>
            <div className="bg-[#1f1f1f] rounded-[40]">
              <p className="p-2">
                The Android Client is planned to be coded in the future. 
                Development has not started, and no ETA has been finalized. If you
                are experienced in Android app development, create a discussion <Link href="https://github.com/orgs/FOSSLingo/discussions"><strong>here&nbsp;</strong></Link> 
                under "Ideas".
              </p>
            </div>
          </div>

          <div className='w-100 h-50 bg-[#0f0f0f] rounded-[40] items-center flex flex-row pr-5'>
            <div className="flex items-center px-5">
              <Link href="https://www.apple.com/os/macos/" target="_blank" rel="noopener noreferrer">
                <SiLinux size={40}/>
              </Link>
            </div>
            <div className="bg-[#1f1f1f] rounded-[40]">
              <p className="p-2">
                The Linux Client is planned to be coded in the future. 
                Development has not started, and no ETA has been finalized. If you
                are experienced in Linux app development, create a discussion <Link href="https://github.com/orgs/FOSSLingo/discussions"><strong>here&nbsp;</strong></Link> 
                under "Ideas".
              </p>
            </div>
          </div>

          <div className='w-100 h-50 bg-[#0f0f0f] rounded-[40] items-center flex flex-row pr-5'>
            <div className="flex items-center px-5">
              <Link href="https://www.apple.com/os/macos/" target="_blank" rel="noopener noreferrer">
                <SiMacos size={40}/>
              </Link>
            </div>
            <div className="bg-[#1f1f1f] rounded-[40]">
              <p className="p-2">
                The macOS Client is planned to be coded in Swift. 
                Development has not started, and no ETA has been finalized. If you
                are experienced in macOS app development, create a discussion <Link href="https://github.com/orgs/FOSSLingo/discussions"><strong>here&nbsp;</strong></Link> 
                under "Ideas".
              </p>
            </div>
          </div>
          
        </section>
        <Footer/>
      </main>
    </>
  )
}