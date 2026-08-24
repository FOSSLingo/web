// TODO Note!
// * The comments in this code 
// ? are best viewed with the 
// ! Better Comments Next VSCode extension

// ? is used for explanations (?b)
// * is used for notes (*g)
// ! is used for alerts! (!r)
// TODO is used for TODO's (TODOo)

import Image from "next/image"
import { cookies } from "next/headers";
import { redirect } from "next/navigation"

import { LessonCard } from "@/src/components/ui/lessonCard";
import { Sidebar } from "@/src/components/ui/sidebar";
import { getMessages } from "next-intl/server";

export default async function Dash({ searchParams }: { searchParams: Promise<{ courseID?: string }>}) {
  // ? cookies stuff
  const cookieStore = await cookies()
  const gemsCount = cookieStore.get("gems")?.value
    
  // ? stuff from backend variables
  const { courseID } = await searchParams;
  const serverUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const response = await fetch(serverUrl!, { cache: "no-store" });

  // ? if no course selected, take user to course selection
  // ? very simple if statement, no need for else
  if (!courseID) {
    redirect("/dash/courses")
  }

  // ? get available courses and get id's
  const courses = await response.json();
  const course = courses.find((c: any) => c.courseID === Number(courseID));

  // ? get response and parse to json V
  // * ofcourse cache: can be changed / removed if you want no caching for faster loading, but i reccomend no caching
  // TODO add variable to .env for cache, variable can be set true or false (ex: CACHING=false, or CACHING=no-store)
  const courseResponse = await fetch(`${serverUrl}/resources${course.courseFolder}/index.json`, {cache: "no-store"});  
  const courseIndex = await courseResponse.json();

  return (
    <div className="flex">
      <Sidebar highlitedIcon="dash"/> {/* * See?! I turned it into a reuseable component! */}
      <main className="flex-1">
        <div className="relative flex items-center justify-center py-10 lg:py-20 xl:py-20">
          <h1 className="font-bold text-4xl">Learn</h1>
          <div className="absolute right-0 flex items-center pr-7">
            <div className="flex items-center justify-center bg-pink-300 p-1 rounded-xl">
              <p className="text-3xl text-black font-bold px-2">{gemsCount}</p>
              <Image
                src="/gems.png"
                alt="Gems"
                width="50"
                height="50"
                className="pr-2"
              />
            </div>
          </div>
        </div>
        <hr className='border-neutral-800'/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-6">
          {courseIndex.Sections.map((section: any) =>
            section.lessons.map((lesson: any, index: any) => (
              // * guess what? i did the todo!
              // * explanation below (?b)
              <LessonCard
                key={lesson.id}
                lesson={lesson.lesson}
                name={lesson.name}
                lessonType={lesson.lessonType}
                courseHrefTag={`?courseID=${courseID}`}   // ? See so now the web frontend
                lessonHrefTag={`&lesson=${lesson.id}`}    // ? creates the course, lesson,
                sectionHrefTag={`&section=${section.id}`} // ? and section HrefTags.
              />
            ))
          )}
        </div>
      </main>
    </div>
  )
}