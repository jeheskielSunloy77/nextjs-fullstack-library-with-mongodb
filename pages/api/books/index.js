import dbConnect from "../../../services/dbConnect"
import BookSchema from "../../../models/books"

dbConnect()
export default async (req, res) => {
	const { method } = req

	switch (method) {
		case "GET":
			try {
				const allData = await BookSchema.find({})
				res.status(200).json({ success: true, data: allData })
			} catch (error) {
				res.status(400).json({ success: false, error: error })
			}
			break
		case "POST":
			try {
				const createData = await BookSchema.create(req.body)
				res.status(201).json({ success: true, data: createData })
			} catch (error) {
				res.status(400).json({ success: false, error: error })
			}
			break
		default:
			res.status(400).json({ success: false })
			break
	}
}
