import * as FeatherIcons from 'react-feather';
import { SiBluesky, SiGithub } from '@icons-pack/react-simple-icons';
import Link from "next/link";

function wipPopup() {
  alert("The FOSSLingo Bluesky account and website are a work in progress. Stay tuned!")
}

export const Footer = () => {
  return (
    <main>
      <hr className='border-neutral-800'/> 
      <div className='flex items-center justify-between px-15 sm:px-25 md:px-50 lg:px-75 xl:px-200 h-32'>
        <div>
          <p>FOSSLingo is maintained by volunteers.</p>
        </div>
        <div className='flex flex-row justify-center items-center gap-5'>
          <Link href="" onClick={wipPopup}><SiBluesky/></Link>
          <Link href="https://github.com/FOSSLingo"><SiGithub/></Link>
          <Link href="" onClick={wipPopup}><FeatherIcons.Globe/></Link>
        </div>
      </div>
    </main>
  )
}