import Link from "next/link"
import { LightDarkModeToggle } from '@/src/components/lightDarkModeToggle';

export const NavBar = () => {
  return (
    <main>
      <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4 p-3"> {/* Top navbar*/}
        <div className="flex flex-wrap items-center gap-4"> {/* Top navbar | Left side stuff */}
          <Link href="/" className='font-bold'>FOSSLingo</Link>
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