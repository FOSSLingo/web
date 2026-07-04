import { VerticalBr } from "@/src/components/verticalBr"
import * as FeatherIcons from 'react-feather';
import Link from "next/link";

export default function Dash() {
  return (
    <div className="flex">
      <div className="flex items-center">
        <div className="flex flex-col p-5 gap-5">
          <Link href="/dash">
            <div className="bg-[#1F1F1F] p-2 rounded-2xl">
              <FeatherIcons.Home className="sm:size-10 md:size-10"/>
            </div>
          </Link>
          <Link href="/dash/courses">
            <div className="p-2 rounded-2xl">
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
      </div>
      <main>
        
      </main>
    </div>
  )
}