import { VerticalBr } from "@/src/components/verticalBr"
import * as FeatherIcons from 'react-feather';
import Link from "next/link";
import { CourseIcon } from "@/src/components/courseIcon";
import { promises as fs } from 'fs';
import spanishFlag from '@/public/es.svg'

export default async function Dash() {
  const serverUrl = process.env.NEXT_PUBLIC_BACKEND_URL
  const response = await fetch(serverUrl!, { cache: "no-store" });
  const index = await response.json()

  return (
    <div className="flex">
      <div className="flex items-center"> {/* side navbar */}
        <div className="flex flex-col p-5 gap-5">
          <Link href="/dash">
            <div className="p-2 rounded-2xl">
              <FeatherIcons.Home className="sm:size-10 md:size-10"/>
            </div>
          </Link>
          <Link href="/dash/courses">
            <div className="bg-[#1F1F1F] p-2 rounded-2xl">
              <FeatherIcons.Book className="sm:size-10 md:size-10"/>
            </div>
          </Link>
          <Link href="/dash/leaderboard">
            <div className="p-2 rounded-2xl">
              <FeatherIcons.Award className="sm:size-10 md:size-10"/>
            </div>
          </Link>
          <Link href="/dash/account">
            <div className="p-2 rounded-2xl">
              <FeatherIcons.User className="sm:size-10 md:size-10"/>
            </div>
          </Link>
          <Link href="/dash/settings">
            <div className="p-2 rounded-2xl">
              <FeatherIcons.Settings className="sm:size-10 md:size-10"/>
            </div>
          </Link>
          <Link href="https://github.com/FOSSLingo">
            <div className="p-2 rounded-2xl">
              <FeatherIcons.GitHub className="sm:size-10 md:size-10"/>
            </div>
          </Link>
        </div> 
        <VerticalBr/>
      </div> {/* end of side navbar */}
      <main className="flex-1">
        <div className="flex flex-row justify-center py-10 lg:py-20 xl:py-20">
          <h1 className="font-bold text-4xl">Courses</h1>
        </div>
        <hr className='border-neutral-800'/>
        <div className="flex gap-4 p-6">
          {/* tbh idk what course: any does but when 
          i try to delete it next gives an error,
          ill just leave it i guess */}
          {index.map((course: any, i: number) => (
            <CourseIcon
              key={i}
              courseID={i.toString()}
              alt={'Course Flag'}
            />
          ))}
        </div>
      </main>
    </div>
  )
}