import Link from "next/link"

interface LessonCardProps {
  courseID: string;
}

const serverUrl = process.env.NEXT_PUBLIC_BACKEND_URL
const response = await fetch(serverUrl!);
const courses = await response.json()


export const LessonCard = async ({ courseID }: LessonCardProps) => {

  // this whole section is kinda iffy right now idk 
  
  const course = courses.find((c: any) => c.courseID === courseID)

  const courseResponse = await fetch(
    `${serverUrl}/resources${course.courseFolder}/index.json`
  );

  const courseIndex = await courseResponse.json()

  return (
    <div className='h-50 bg-[#0f0f0f] rounded-[40] items-center justify-center flex flex-col'>
      <h1 className="font-bold text-2xl pb-3">{courseIndex.Name}</h1>
      <div className="flex gap-1 px-5">
        <div className="flex flex-row w-70 bg-[#1f1f1f] rounded-tl-[40] rounded-bl-[40] rounded-br-xl rounded-tr-xl">
          <p className="p-3 text-center">Fill in the blanks to make a sentence! (Tech demo)</p>
        </div>
        <div className="flex items-center justify-center w-20 bg-teal-400 rounded-bl-xl rounded-tl-xl rounded-tr-[40] rounded-br-[40]">
          <Link href="/dash/lesson/fillInBlanks">
            <p className="text-black font-bold">Go!</p>
          </Link>
        </div>
      </div>
    </div>
  )
}