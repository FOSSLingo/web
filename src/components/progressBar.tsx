"use client";

interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  const calculatedProgress = Math.min(Math.max(progress, 0), 100);
  return (
    <div className="w-100 sm:w-150 md:w-190 lg:w-250 xl:w-300 2xl:w-350 h-6 bg-black rounded-xl border-2 border-[#2A2A2A]">
      <div 
        className={`h-full bg-teal-400 rounded-xl`} 
        style={{ width: `${calculatedProgress}%` }} // ? doing w-${calculatedProgress} doesn't work
      />
    </div>
  )
}