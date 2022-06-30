import React from "react"
import BookCard from "./BookCard"

export default function BooksByCategory() {
	return (
		<>
			<section className="bg-white dark:bg-gray-900">
				<div className="container px-6 py-10 mx-auto">
					<h1 class="text-xl font-semibold text-gray-800 capitalize lg:text-2xl dark:text-white mb-6">
						Drama
					</h1>
					<div
						className="gap-2"
						style={{
							display: "grid",
							gridTemplateColumns:
								"repeat(auto-fit, minmax(200px, 1fr))",
						}}
					>
						<BookCard />
						<BookCard />
						<BookCard />
						<BookCard />
					</div>
				</div>
			</section>
		</>
	)
}
