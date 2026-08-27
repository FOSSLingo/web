"use client"

import Link from "next/link"
import { 
  SiAndroid, 
  SiLinux, 
  SiMacos, 
  SiIos, 
  SiNextdotjs 
} from '@icons-pack/react-simple-icons';
import { useTranslations } from "next-intl";

import { Footer } from '@/src/components/ui/footer';
import { NavBar } from "@/src/components/ui/navbar/homeNavbar";

const iOSDevLink     = "https://github.com/orgs/FOSSLingo/discussions/new?category=ideas&title=I'm willing to work on iOS Client Development!&body=Hello! I am a developer, and I am ready to start working on the iOS Client for FOSSLingo! I have x amount of experience."
const AndroidDevLink = "https://github.com/orgs/FOSSLingo/discussions/new?category=ideas&title=I'm willing to work on Android Client Development!&body=Hello! I am a developer, and I am ready to start working on the Android Client for FOSSLingo! I have x amount of experience."
const LinuxDevLink   = "https://github.com/orgs/FOSSLingo/discussions/new?category=ideas&title=I'm willing to work on Linux Client Development!&body=Hello! I am a developer, and I am ready to start working on the Linux Client for FOSSLingo! I have x amount of experience."
const MacOSDevLink   = "https://github.com/orgs/FOSSLingo/discussions/new?category=ideas&title=I'm willing to work on macOS Client Development!&body=Hello! I am a developer, and I am ready to start working on the macOS Client for FOSSLingo! I have x amount of experience."
const WindowsDevLink = "https://github.com/orgs/FOSSLingo/discussions/new?category=ideas&title=I'm willing to work on Windows Client Development!&body=Hello! I am a developer, and I am ready to start working on the Windows Client for FOSSLingo! I have x amount of experience."

export default function Apps() {
  const t = useTranslations("AppsPage")
  return (
    <>
      <NavBar/>
      <main>
        <section className="flex min-h-[20vh] sm:min-h-[20vh] md:min-h-[30vh] lg:min-h-[20vh] flex-col items-center justify-center px-6 text-center">
          <h1 className="max-w-4xl text-4xl font-bold md:text-5xl lg:text-6xl">
            {t("title")}
          </h1>
        </section>
        <hr className='dark:border-neutral-800'/>
        <section className='flex flex-col items-center justify-center px-6 py-6 text-center gap-6'>
          
          <div className='w-100 h-50 border border-2 border-gray-300 bg-gray-200 dark:border-neutral-800 dark:bg-neutral-900 rounded-[40] items-center flex flex-row pr-5'>
            <div className="flex items-center px-5">
              <Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                <SiNextdotjs size={40}/>
              </Link>
            </div>
            <div className="dark:bg-neutral-800 bg-gray-300 rounded-[40]">
              <p className="p-2">
                {t("descriptions.NextJS")}
              </p>
            </div>
          </div>
          
          <div className='w-100 h-50 border border-2 border-gray-300 bg-gray-200 dark:border-neutral-800 dark:bg-neutral-900 rounded-[40] items-center flex flex-row pr-5'>
            <div className="flex items-center px-5">
              <Link href="https://www.apple.com/os/ios/" target="_blank" rel="noopener noreferrer">
                <SiIos size={40}/>
              </Link>
            </div>
            <div className="dark:bg-neutral-800 bg-gray-300 rounded-[40]">
              <p className="p-3">
                {t("descriptions.iOS")}
                <Link href={iOSDevLink}><strong>&nbsp;{t("here")}.</strong></Link> 
              </p>
            </div>
          </div>

          <div className='w-100 h-50 border border-2 border-gray-300 bg-gray-200 dark:border-neutral-800 dark:bg-neutral-900 rounded-[40] items-center flex flex-row pr-5'>
            <div className="flex items-center px-5">
              <Link href="https://android.com" target="_blank" rel="noopener noreferrer">
                <SiAndroid size={40}/>
              </Link>
            </div>
            <div className="dark:bg-neutral-800 bg-gray-300 rounded-[40]">
              <p className="p-3">
                {t("descriptions.Android")}
                <Link href={AndroidDevLink}><strong>&nbsp;{t("here")}.</strong></Link> 
              </p>
            </div>
          </div>

          <div className='w-100 h-50 border border-2 border-gray-300 bg-gray-200 dark:border-neutral-800 dark:bg-neutral-900 rounded-[40] items-center flex flex-row pr-5'>
            <div className="flex items-center px-5">
              <Link href="https://www.linux.com/" target="_blank" rel="noopener noreferrer">
                <SiLinux size={40}/>
              </Link>
            </div>
            <div className="dark:bg-neutral-800 bg-gray-300 rounded-[40]">
              <p className="p-3">
                {t("descriptions.Linux")}
                <Link href={LinuxDevLink}><strong>&nbsp;{t("here")}.</strong></Link> 
              </p>
            </div>
          </div>

          <div className='w-100 h-50 border border-2 border-gray-300 bg-gray-200 dark:border-neutral-800 dark:bg-neutral-900 rounded-[40] items-center flex flex-row pr-5'>
            <div className="flex items-center px-5">
              <Link href="https://www.apple.com/os/macos/" target="_blank" rel="noopener noreferrer">
                <SiMacos size={40}/>
              </Link>
            </div>
            <div className="dark:bg-neutral-800 bg-gray-300 rounded-[40]">
              <p className="p-3">
                {t("descriptions.macOS")}
                <Link href={MacOSDevLink}><strong>&nbsp;{t("here")}.</strong></Link> 
              </p>
            </div>
          </div>

          <div className='w-100 h-50 border border-2 border-gray-300 bg-gray-200 dark:border-neutral-800 dark:bg-neutral-900 rounded-[40] items-center flex flex-row pr-5'>
            <div className="flex items-center px-3">
              <Link href="https://windows.com/" target="_blank" rel="noopener noreferrer">
                <p className="text-sm">Windows</p>
              </Link>
            </div>
            <div className="dark:bg-neutral-800 bg-gray-300 rounded-[40]">
              <p className="p-3">
                {t("descriptions.Windows")}
                <Link href={WindowsDevLink}><strong>&nbsp;{t("here")}.</strong></Link> 
              </p>
            </div>
          </div>
          
        </section>
        <Footer/>
      </main>
    </>
  )
}