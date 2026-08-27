import Link from "next/link"
import { cookies } from "next/headers";

interface LessonCardProps {
  lesson: string;
  name: string;
  lessonType: string;
  courseHrefTag: string;
  lessonHrefTag: string;
  sectionHrefTag: string;
}

export const LessonCard = async ({ 
  lesson, 
  name, 
  lessonType,
  courseHrefTag,
  lessonHrefTag,
  sectionHrefTag,
}: LessonCardProps) => {
  return (
    <div className={`w-full h-50 rounded-[40] items-center justify-center flex flex-col border-2 dark:bg-neutral-900 dark:border-neutral-800 dark:text-white bg-gray-200 border-gray-300 text-black`}>
      <h1 className="font-bold text-2xl pb-3">{lesson}</h1>
      <div className="flex gap-1 w-full px-4">
        <div className={`flex flex-grow w-full rounded-tl-[40] rounded-bl-[40] rounded-br-xl rounded-tr-xl dark:bg-neutral-800 dark:text-white bg-gray-300 text-black `}>
          <p className="p-3 text-center">{name}</p>
        </div>
        <div className="flex items-center justify-center w-40 bg-teal-400 border-2 border-teal-500 rounded-bl-xl rounded-tl-xl rounded-tr-[40] rounded-br-[40]">
          <Link href={`/dash/lesson/${lessonType}${courseHrefTag}${lessonHrefTag}${sectionHrefTag}`}>
            <p className="text-black font-bold">Go!</p>
          </Link>
        </div>
      </div>
    </div>
  )
}