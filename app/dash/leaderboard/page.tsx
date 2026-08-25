import { ReactiveBar } from "@/src/components/ui/navbar/reactiveBar";

export default function Leaderboard() {
  return (
    <div className="flex min-h-screen">
      <ReactiveBar highlitedIcon="account"/>
      <main className="flex flex-col flex-1">
        <div className="flex flex-row justify-center py-10 lg:py-20 xl:py-20">
          <h1 className="font-bold text-4xl">Leaderboard</h1>
        </div>
        <hr className='border-neutral-800'/>
        <div className="flex flex-1 justify-center items-center pb-24 md:pb-0">
          <div className="flex-1 flex justify-center items-center">
            <h1 className="text-center font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-4">
              A leaderboard will be added when accounts are added, because how else would I add a leaderboard?
            </h1>
          </div>
        </div>
      </main>
    </div>
  )
}