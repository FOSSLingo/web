import { parse, stringify } from 'yaml'
import YAML from 'yaml'

export default async function fillInTheBlanks({ searchParams }: { searchParams: Promise<{ courseId?: string, lesson?: string, section?: string }>}) {

  const { courseId } = await searchParams; // this is the ?courseId= in the url
  const { lesson } = await searchParams; // this is the ?lesson= in the url
  const { section } = await searchParams; // this is the ?section= in the url
  const sectionButANumber = Number(section) - 1; // some fixes
  const lessonButANumber = Number(lesson) -1; // some fixes (slowed + reverb)
  const serverUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const response = await fetch(serverUrl!, { cache: "no-store" });

  const courses = await response.json(); // turn raw courses into proper json
  const course = courses.find((c: any) => c.courseID === Number(courseId)); 

  // ofcourse cache: can be changed / removed if you want no caching for faster loading, but i reccomend no caching
  const courseResponse = await fetch(`${serverUrl}/resources${course.courseFolder}/index.json`, {cache: "no-store"});  
  const courseIndex = await courseResponse.json();

  const lessonFileResponse = await fetch(`${serverUrl}/resources${courseIndex.Sections[sectionButANumber].sectionFolder}/${courseIndex.Sections[sectionButANumber].lessons[lessonButANumber].lessonFile}`, { cache: "no-store" })
  const lessonText = await lessonFileResponse.text()
  const file = YAML.parse(lessonText)
  console.log(file.questions[0].question)

  return (
    <main>
      <div className="flex flex-col justify-center items-center p-5">
        <div className='flex'> {/* the "header" */}
          <h1 className="font-bold text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl">{courseIndex.Sections[sectionButANumber].lessons[lessonButANumber].name}</h1>
        </div>
        <p>{file.questions[0].question}</p>
        <div className='flex gap-3 pt-4'>
          <div className='bg-[#1f1f1f] rounded-xl'> {/* choice */}
            <p className='p-3 font-bold'>Lazy</p>
          </div>
          <div className='bg-[#1f1f1f] rounded-xl'> {/* choice */}
            <p className='p-3 font-bold'>Lazy</p>
          </div>
          <div className='bg-[#1f1f1f] rounded-xl'> {/* choice */}
            <p className='p-3 font-bold'>Lazy</p>
          </div>
          <div className='bg-[#1f1f1f] rounded-xl'> {/* choice */}
            <p className='p-3 font-bold'>Lazy</p>
          </div>
        </div>
      </div>
    </main>
  )
}