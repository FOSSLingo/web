"use client"

import { ReactiveBar } from "@/src/components/ui/navbar/reactiveBar";
import { useState } from "react";

import Cookie from "js-cookie"

export default function Shop() {
	const [isPopupOpen, setIsPopupOpen] = useState(false)
	const currentGems = Number(Cookie.get("gems"))

	function buyGemsMultiplier() {
		if (currentGems < 1000) {
			alert("Insufficent Balance, you cannot afford the Gems Multiplier")
			return
		}
		const newGemsBalance = currentGems - 1000
		Cookie.set("gems", String(newGemsBalance))
		const currentGemsMultiplierLessonsLeft = Number(
			Cookie.get("gemsMultiplierLessonsLeft") || 0
		)

		Cookie.set(
			"gemsMultiplierLessonsLeft",
			String(currentGemsMultiplierLessonsLeft + 3)
		)

		setIsPopupOpen(false)
		}

  return (
    <div className="flex min-h-screen">
      <ReactiveBar highlitedIcon="shop"/>
      <main className="flex flex-col flex-1">
        <div className="flex flex-row justify-center py-10 lg:py-20 xl:py-20">
          <div className="flex-col text-center">
						<h1 className="font-bold text-4xl">Shop</h1>
						<p>yes, this shop only has gems multipliers (3 cards to demo the grid)</p>
					</div>
        </div>
        <hr className='border-neutral-800'/>
        <div className="flex justify-center pt-5">
					<div className="grid grid-cols-2 gap-2">
						<div 
							className="bg-green-500 w-fit p-3 rounded-3xl border-4 border-green-800"
							onClick={() => setIsPopupOpen(true)}
						>
							<p className="font-bold text-xl">Gems Multiplier - G$ 1000</p>
							<p>Multiplies Gems Earned by 2x</p>
							<p>for 2 lessons</p>
						</div>

						<div 
							className="bg-green-500 w-fit p-3 rounded-3xl border-4 border-green-800"
							onClick={() => setIsPopupOpen(true)}
						>
							<p className="font-bold text-xl">Gems Multiplier - G$ 1000</p>
							<p>Multiplies Gems Earned by 2x</p>
							<p>for 2 lessons</p>
						</div>

						<div 
							className="bg-green-500 w-fit p-3 rounded-3xl border-4 border-green-800"
							onClick={() => setIsPopupOpen(true)}
						>
							<p className="font-bold text-xl">Gems Multiplier - G$ 1000</p>
							<p>Multiplies Gems Earned by 2x</p>
							<p>for 2 lessons</p>
						</div>
						{isPopupOpen && (
							<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
								<div className="w-full max-w-md rounded-3xl border-4 bg-gray-200 border-gray-300 p-6 shadow-xl dark:bg-neutral-900 dark:border-neutral-800">
									<h3 className="text-xl font-bold text-black dark:text-white">Gems Multiplier</h3>
									<p className="mt-2 text-gray-600 dark:text-gray-300">Multiplies Gems Earned by 2x for 3 lessons.</p>		
									<div className="mt-4 flex justify-end space-x-2">
										<button 
											className="rounded rounded-3xl bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300"
											onClick={() => setIsPopupOpen(false)}>
												Close
										</button>
										<button 
											className="rounded rounded-3xl border-2 bg-teal-400 border-teal-500 px-4 py-2 text-black hover:bg-teal-500"
											onClick={buyGemsMultiplier}
										>
											Buy
										</button>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
      </main>
    </div>
  )
}