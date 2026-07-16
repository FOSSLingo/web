import { VerticalBr } from "@/src/components/verticalBr"
import * as FeatherIcons from 'react-feather';
import Link from "next/link";

export default function Account() {
  var quotes = // * Look, I got bored, ok?
    [
      "Bold of you to assume that I have implemented account functionality.", 
      "Does this app even need an account function? What's the point?", 
      "I'm too tired to add accounts, get me a coffee and I will.",
      "Sorry, I ran out of Claude credits, accounts are now postponed. /j",
      "Fork this repo and add accounts yourself!!",
      "Hashing? What's that? I store credentials in plain JSON."
    ]
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="flex">
      <div className="flex items-center">
        <div className="flex flex-col p-5 gap-5">
          <Link href="/dash">
            <div className="p-2 rounded-2xl">
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
            <div className="bg-[#1F1F1F] p-2 rounded-2xl">
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
      <main className="flex flex-col flex-1">
        <div className="flex flex-row justify-center py-10 lg:py-20 xl:py-20">
          <h1 className="font-bold text-4xl">Account</h1>
        </div>
        <hr className='border-neutral-800'/>
        <div className="flex-1 flex justify-center items-center">
          <h1 className="font-bold text-5xl px-15">
            {randomQuote}
          </h1>
        </div>
      </main>
    </div>
  )
}