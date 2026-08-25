import { Sidebar } from "./sidebar"
import { Bottombar } from "./bottombar"

interface ReactiveBarProps {
  highlitedIcon: string
}

// ? highlitedIcon only takes the following inputs:
// ? dash, courses, leaderboard, account, settings.

export const ReactiveBar = ({highlitedIcon}: ReactiveBarProps) => {
  return (
    <main>
      <div className="hidden md:block">
        <Sidebar highlitedIcon={highlitedIcon} />
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <Bottombar highlitedIcon={highlitedIcon} />
      </div>
    </main>
  )
}