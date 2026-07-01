"use client"

import Link from "next/link"
import { Roboto } from 'next/font/google';
import { Footer } from '@/src/components/footer';
import { SiApple, SiAndroid, SiLinux, SiMacos } from '@icons-pack/react-simple-icons';

const roboto = Roboto({
  subsets: ['latin']
})

export default function Apps() {
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
        <section className="flex min-h-[10vh] sm:min-h-[40vh] md:min-h-[30vh] lg:min-h-[20vh] flex-col items-center justify-center px-6 text-center">
          <h1 className="max-w-4xl text-4xl font-bold md:text-5xl lg:text-6xl">
            Apps
          </h1>
        </section>
        <hr className='border-neutral-800'/>
        <section className='flex flex-col items-center justify-center px-6 py-6 text-center gap-6'>
          
          <div className='w-100 h-50 bg-[#0f0f0f] rounded-[40] items-center flex pl-5'>
            <Link href="https://www.apple.com/os/ios/" target="_blank" rel="noopener noreferrer">
              <SiApple size={40}/>
            </Link>
          </div>
        
          <div className='w-100 h-50 bg-[#0f0f0f] rounded-[40] items-center flex pl-5'>
            <Link href="https://www.android.com/" target="_blank" rel="noopener noreferrer">
              <SiAndroid size={40}/>
            </Link>
          </div>
      
          <div className='w-100 h-50 bg-[#0f0f0f] rounded-[40] items-center flex pl-5'>
            <Link href="https://www.linux.org/" target="_blank" rel="noopener noreferrer">
              <SiLinux size={40}/>
            </Link>
          </div>
          
          <div className='w-100 h-50 bg-[#0f0f0f] rounded-[40] items-center flex pl-5'>
            <Link href="https://www.apple.com/os/macos/" target="_blank" rel="noopener noreferrer">
              <SiMacos size={40}/>
            </Link>
          </div>
          
        </section>
        <Footer/>
      </main>
    </>
  )
}