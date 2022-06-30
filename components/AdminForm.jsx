import React from "react"

export default function AdminForm() {
	return (
		<>
			<section className="bg-white dark:bg-gray-800">
				<div class="max-w-4xl p-6 mx-auto">
					<h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
						List a New Book
					</h2>
					<form>
						<div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
							<div>
								<label
									class="text-gray-700 dark:text-gray-200"
									for="title"
								>
									Title
								</label>
								<input
									id="title"
									type="text"
									class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
								/>
							</div>

							<div>
								<label
									class="text-gray-700 dark:text-gray-200"
									for="author"
								>
									Author
								</label>
								<input
									id="author"
									type="text"
									class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
								/>
							</div>

							<div>
								<label
									class="text-gray-700 dark:text-gray-200"
									for="price"
								>
									Price
								</label>
								<input
									id="price"
									type="text"
									class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
								/>
							</div>

							<div>
								<label
									class="text-gray-700 dark:text-gray-200"
									for="cover"
								>
									Cover
								</label>
								<input
									id="cover"
									type="text"
									class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
								/>
							</div>
							<div>
								<label
									for="countries"
									class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
								>
									Category
								</label>
								<select
									id="countries"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								>
									<option selected="">select a category</option>
									<option value="US">United States</option>
									<option value="CA">Canada</option>
									<option value="FR">France</option>
									<option value="DE">Germany</option>
								</select>
							</div>
						</div>
						<div className="my-5">
							<label
								for="desc"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
							>
								Book Description
							</label>
							<textarea
								id="desc"
								rows="2"
								class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="book description..."
							></textarea>
						</div>
						<div class="flex justify-end mt-6">
							<button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
								Submit
							</button>
						</div>
					</form>
				</div>
			</section>
		</>
	)
}
