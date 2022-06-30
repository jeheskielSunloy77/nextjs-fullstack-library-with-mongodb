import React from "react"

export default function SearchBook() {
	return (
		<>
			<section className="bg-white dark:bg-gray-900">
				<div className="container px-6 py-10 mx-auto">
					<h1 class="text-xl font-semibold text-gray-800 capitalize lg:text-2xl dark:text-white mb-6">
						Search your favorite Book
					</h1>
					<form>
						<div
							className="gap-2"
							style={{
								display: "grid",
								gridTemplateColumns: "repeat(2, minmax(200px, 1fr))",
							}}
						>
							<div className="mb-6">
								<label
									for="title"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
								>
									Book Title
								</label>
								<input
									type="text"
									id="title"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Insert Book Title"
									required=""
								/>
							</div>
							<div className="mb-6">
								<label
									for="author"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
								>
									Book Author
								</label>
								<input
									type="text"
									id="author"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Insert Book Author"
									required=""
								/>
							</div>
							<div className="mb-6">
								<label
									for="category"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
								>
									Book Category
								</label>
								<select
									id="category"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								>
									<option disabled selected value>
										-- select book category --
									</option>
									<option>Drama</option>
									<option>Canada</option>
									<option>France</option>
									<option>Germany</option>
								</select>
							</div>
							<div className="mb-6">
								<label
									for="price"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
								>
									Book Category
								</label>
								<select
									id="price"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								>
									<option disabled selected value>
										-- select price range --
									</option>
									<option>{`< $10`}</option>
									<option>$10 - $20</option>
									<option>$20 - $30</option>
									<option>$40 - $50</option>
									<option>{`$50 >`}</option>
								</select>
							</div>
						</div>

						<button
							type="submit"
							class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
						>
							Submit
						</button>
					</form>
				</div>
			</section>
		</>
	)
}
