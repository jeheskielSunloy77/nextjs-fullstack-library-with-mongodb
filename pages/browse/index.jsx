import LatestRelease from "../../components/LatestRelease"
import BooksByCategory from "../../components/BooksByCategory"
import SearchBook from "../../components/SearchBook"
export default function () {
	return (
		<>
			<LatestRelease />
			<SearchBook />
			<BooksByCategory />
		</>
	)
}
export async function getStaticProps() {
	//fetch data for latest release and per category
}
