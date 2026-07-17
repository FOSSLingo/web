import { VerticalBr } from "@/src/components/verticalBr"
import { LessonCard } from "@/src/components/lessonCard";
import Link from "next/link";
import Navigation, { redirect } from "next/navigation"
import * as FeatherIcons from 'react-feather';

export default async function Dash({ searchParams }: { searchParams: Promise<{ courseId?: string }>}) {
  const { courseId } = await searchParams;
  const serverUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const response = await fetch(serverUrl!, { cache: "no-store" });

  if (!courseId) {
    
    redirect("/dash/courses")
  }

  const courses = await response.json();
  const course = courses.find((c: any) => c.courseID === Number(courseId));

  // * ofcourse cache: can be changed / removed if you want no caching for faster loading, but i reccomend no caching
  const courseResponse = await fetch(`${serverUrl}/resources${course.courseFolder}/index.json`, {cache: "no-store"});  
  const courseIndex = await courseResponse.json();

  return (
    <div className="flex">
      {/* Start of side navbar, will turn into component soon (<SideNavBar/>) */}
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
      {/* End of side navbar */}

      <main className="flex-1">
        <div className="flex flex-row justify-center py-10 lg:py-20 xl:py-20">

          <h1 className="font-bold text-4xl">Learn</h1>
        </div>
        <hr className='border-neutral-800'/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-6">
          {courseIndex.Sections.map((section: any) =>
            section.lessons.map((lesson: any, index: any) => (
              // TODO | inputting key, lesson, name, lessonFile,
              // TODO | and lessonType would probably be easier
              // TODO | to do in the actual lessonCard.tsx 
              // TODO | component but it's whatever
              <LessonCard
                key={lesson.id}
                lesson={lesson.lesson}
                name={lesson.name}
                lessonFile={lesson.lessonFile}
                lessonType={lesson.lessonType}
                courseHrefTag={course.courseHrefTag}
                lessonHrefTag={lesson.lessonHrefTag}
                sectionHrefTag={lesson.sectionHrefTag}
              />
            ))
          )}
        </div>
      </main>
    </div>
  )
}