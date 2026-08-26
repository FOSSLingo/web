import Cookie from "js-cookie"

interface LessonEndingProps {
    gemsEarned: number,
    incorrectAnswers: number
    correctAnswers: number
    totalQuestions: number
    timeElapsed: string
}

export const LessonEnding = ({
	gemsEarned,
	incorrectAnswers,
	correctAnswers,
	totalQuestions,
	timeElapsed
}: LessonEndingProps) => {
	var compliments = // * Look, I got bored, ok?
    [
      "Great job!", 
      "Well done!", 
      "A lesson well done.",
      "Your skill definitely improved!",
      "'It is not that I'm so smart. But I stay with the questions much longer.' - Albert Einstein",
      "'fosslingo is good app' - iddu01"
    ]
  const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
  const currentGems = Number(Cookie.get("gems") ?? 100)

  function returnHome() {
    Cookie.set("gems", String(currentGems + gemsEarned), {expires: 365})
    window.history.back()
  }

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center">
			<section className="text-center max-w-lg">
				<h1 className="text-3xl font-bold">Lesson Complete!</h1>
				<p className="pt-2">{randomCompliment}</p>
			</section>
			<section className="grid grid-cols-2 gap-4 pt-5">
				<div className="text-center p-2 rounded-xl border-6 bg-pink-300 border-pink-400">
					<p className="font-bold text-black">Gems Earned</p>
					<div className="flex justify-center items-center p-2 rounded-xl border-4 border-pink-300 bg-pink-400">
						<p className="font-bold text-black">{gemsEarned}</p>
					</div>
				</div>
				<div className="text-center p-2 rounded-xl border-6 bg-blue-300 border-blue-400">
					<p className="font-bold text-black">Time Elapsed</p>
					<div className="flex justify-center items-center p-2 rounded-xl border-4 border-blue-300 bg-blue-400">
						<p className="font-bold text-black">{timeElapsed}</p>
					</div>
				</div>
				<div className="text-center p-2 rounded-xl border-6 bg-green-300 border-green-400">
					<p className="font-bold text-black">Correct Answers</p>
					<div className="flex justify-center items-center p-2 rounded-xl border-4 border-green-300 bg-green-400">
						<p className="font-bold text-black">{correctAnswers} / {totalQuestions}</p>
					</div>
				</div>
				<div className="text-center p-2 rounded-xl border-6 bg-red-300 border-red-400">
					<p className="font-bold text-black">Incorrect Answers</p>
					<div className="flex justify-center items-center p-2 rounded-xl border-4 border-red-300 bg-red-400">
						<p className="font-bold text-black">{incorrectAnswers} / {totalQuestions}</p>
					</div>
				</div>
			</section>
			<section className="pt-5">
				<div 
					className="p-2 w-75 text-center border border-4 rounded-xl bg-teal-400 border-teal-500"
					onClick={returnHome}
				>
					<p className="font-bold text-black">Return Home</p>
				</div>
			</section>
    </main>
  )
} 