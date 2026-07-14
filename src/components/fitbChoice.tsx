// fitb stands for fillInTheBlanks xD
import Link from "next/link"

interface fitbChoiceProps {
  lesson: string;
  name: string;
  lessonFile: string;
  lessonType: string;
  courseHrefTag: string;
  lessonHrefTag: string;
  sectionHrefTag: string;
}

export const fitbChoice = ({ 
  lesson, 
  name, 
  lessonFile,
  lessonType,
  courseHrefTag,
  lessonHrefTag,
  sectionHrefTag,
}: fitbChoiceProps) => {
  return (
    <div className='bg-[#1f1f1f] rounded-xl' onClick={() => console.log("Clicked")}>
      <p className='p-3 font-bold'>Lazy</p>
    </div>
  )
}