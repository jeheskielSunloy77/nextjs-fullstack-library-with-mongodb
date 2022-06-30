import React from "react"
import LatestReleaseCard from "./LatestReleaseCard"

export default function LatestRelease() {
	return (
		<>
			<section className="bg-white dark:bg-gray-800">
				<div className="container px-6 py-10 mx-auto">
					<h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
						Latest Release
					</h1>

					<div class="mt-2">
						<span class="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
						<span class="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
						<span class="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
					</div>
					<LatestReleaseCard />
				</div>
			</section>
		</>
	)
}
