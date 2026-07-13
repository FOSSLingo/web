export default async function fillInTheBlanks({ searchParams }: { searchParams: Promise<{ courseId?: string, lesson?: string }>}) {

  const { courseId } = await searchParams;
  const { lesson } = await searchParams;
  const serverUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const response = await fetch(serverUrl!, { cache: "no-store" });

  const courses = await response.json();
  const course = courses.find((c: any) => c.courseID === courseId);

  // ofcourse cache: can be changed / removed if you want no caching for faster loading, but i reccomend no caching
  const courseResponse = await fetch(`${serverUrl}/resources${course.courseFolder}/index.json`, {cache: "no-store"});  
  const courseIndex = await courseResponse.json();

  return (
    <main>
      <h1>{courseIndex.Sections[0].name}</h1>
    </main>
  )
}