import { useState } from "react"
export default function FAQ() {
	const [openTab, setOpenTab] = useState([])
	function handleOpenTab(tab) {
		setOpenTab(prev =>
			prev.includes(tab) ? prev.filter(item => item !== tab) : [...prev, tab]
		)
	}
	return (
		<>
			<section className="bg-white dark:bg-gray-900">
				<div className="container px-6 py-12 mx-auto">
					<h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
						Frequently asked questions
					</h1>
					<div className="mt-8 space-y-8 lg:mt-12">
						<Tab
							tabId="tab1"
							title="Nulla ullamco ullamco velit laboris est nostrud irure pariatur aliqua laboris?"
							desc="Veniam incididunt deserunt consectetur mollit consequat cupidatat sint commodo aliqua. Officia deserunt exercitation sint do esse sint in eu labore consectetur magna labore irure veniam. Id esse id magna adipisicing id cupidatat commodo Lorem proident occaecat. Sunt occaecat ut excepteur ad adipisicing nostrud minim elit labore. Et est non voluptate in culpa voluptate enim nisi ipsum eu esse dolore cupidatat."
						/>
						<Tab
							tabId="tab2"
							title="Esse ut aliqua consectetur magna nostrud incididunt irure."
							desc="Do tempor quis culpa id tempor irure velit labore aute do laboris laborum commodo in. Tempor do excepteur ullamco deserunt do ipsum voluptate eu esse tempor eiusmod. Nisi ad elit aliquip laboris consequat consectetur nostrud quis adipisicing ex dolor laboris. Ut duis esse cupidatat esse adipisicing occaecat elit quis ea elit incididunt. Enim proident eiusmod et tempor eiusmod."
						/>
						<Tab
							tabId="tab3"
							title="Enim id sunt velit amet consequat aute ut incididunt laborum."
							desc="Excepteur aute nostrud irure occaecat cillum eu minim eu commodo in. Eiusmod veniam non ipsum ullamco proident culpa sunt nisi ex pariatur sit. Excepteur ut proident aliquip in proident incididunt. Reprehenderit nisi ad non ipsum cupidatat."
						/>
						<Tab
							tabId="tab4"
							title="Deserunt velit minim proident culpa mollit ad."
							desc="Magna cupidatat ea aliqua nisi cillum Lorem non id et cillum. Sit dolore anim incididunt dolor. Sint reprehenderit incididunt incididunt consequat excepteur officia do do velit aliquip sunt id ex aliqua. Officia ullamco sunt exercitation officia laboris duis. Nisi velit veniam do duis."
						/>
						<Tab
							tabId="tab5"
							title="Laboris proident magna commodo anim."
							desc="Dolore ad magna ex sint labore aute commodo commodo sit mollit sint deserunt. Culpa esse nostrud mollit Lorem nostrud nulla cupidatat velit adipisicing ut. Sunt mollit ullamco dolor enim excepteur est elit ut eu. Irure elit mollit ea sunt. Culpa esse nulla fugiat fugiat et exercitation fugiat enim. Officia quis consectetur amet quis ullamco reprehenderit ipsum esse id esse duis est ullamco."
						/>
						<Tab
							tabId="tab6"
							title="Officia consectetur anim exercitation duis excepteur ipsum in exercitation Lorem tempor ullamco enim."
							desc="Minim minim duis nisi veniam qui excepteur. Minim adipisicing magna dolor consectetur adipisicing ex excepteur aliquip qui laboris eu ullamco. Do sunt ut ea nulla ad fugiat eu pariatur commodo sint sint proident ipsum do. Eiusmod proident laborum officia enim ullamco ea ex nisi deserunt."
						/>
					</div>
				</div>
			</section>
		</>
	)
	function Tab({ tabId, title, desc }) {
		return (
			<div
				onClick={() => handleOpenTab(tabId)}
				className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800"
			>
				<button className="flex items-center justify-between w-full">
					<h1 className="font-semibold text-gray-700 dark:text-white">
						{title}
					</h1>

					{openTab.includes(tabId) ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-6 h-6 text-gray-400 bg-gray-200 rounded-full"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M18 12H6"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-6 h-6 text-white bg-blue-500 rounded-full"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 6v6m0 0v6m0-6h6m-6 0H6"
							/>
						</svg>
					)}
				</button>

				<p
					className={`${
						openTab.includes(tabId) ? "" : "hidden"
					} mt-6 text-sm text-gray-500 dark:text-gray-300`}
				>
					{desc}
				</p>
			</div>
		)
	}
}
