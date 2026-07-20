import Link from "next/link"
import Image from "next/image";

import { LightDarkModeToggle } from '@/src/components/lightDarkModeToggle';

import LightModeIcon from "@/public/FOSSLingoLightLogo.svg"
import DarkModeIcon from "@/public/FOSSLingoDarkLogo.svg"

export const NavBar = () => {
  return (
    <main>
      <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4 p-3"> {/* Top navbar*/}
        <div className="flex flex-wrap items-center gap-4"> {/* Top navbar | Left side stuff */}
          <div className="flex items-center justify-center">
            <Link href="/">
              <Image
                src={LightModeIcon}
                width="50"
                height="50"
                alt="FOSSLingo Logo"
                className="block dark:hidden"
              />
              <Image
                src={DarkModeIcon}
                width="50"
                height="50"
                alt="FOSSLingo Logo"
                className="hidden dark:block"
            />
            </Link>
          </div>
          <Link href="/courses">Courses</Link>
          <Link href="/apps">Apps</Link>
          <Link href="/mission">Our Mission</Link>
        </div>
        <div className='flex items-center justify-end gap-2 sm:gap-4'> {/* Top navbar | Right side stuff */} 
          <Link href="/license">License</Link>
          <LightDarkModeToggle/>
        </div> {/* Top navbar | Right side stuff */}   
      </div> {/* Top navbar*/}
      <hr className='border-neutral-800'/>
    </main>
  )
}