import Link from "next/link"

interface LessonCardProps {
  lesson: string;
  name: string;
  lessonFile: string;
  lessonType: string;
  courseHrefTag: string;
  lessonHrefTag: string;
  sectionHrefTag: string;
}

export const LessonCard = ({ 
  lesson, 
  name, 
  lessonFile,
  lessonType,
  courseHrefTag,
  lessonHrefTag,
  sectionHrefTag,
}: LessonCardProps) => {
  return (
    <div className='h-50 bg-[#0f0f0f] rounded-[40] items-center justify-center flex flex-col'>
      <h1 className="font-bold text-2xl pb-3">{lesson}</h1>
      <div className="flex gap-1 px-5">
        <div className="flex flex-row w-70 bg-[#1f1f1f] rounded-tl-[40] rounded-bl-[40] rounded-br-xl rounded-tr-xl">
          <p className="p-3 text-center">{name}</p>
        </div>
        <div className="flex items-center justify-center w-20 bg-teal-400 rounded-bl-xl rounded-tl-xl rounded-tr-[40] rounded-br-[40]">
          <Link href={`/dash/lesson/${lessonType}${courseHrefTag}${lessonHrefTag}${sectionHrefTag}`}>
            <p className="text-black font-bold">Go!</p>
          </Link>
        </div>
      </div>
    </div>
  )
}