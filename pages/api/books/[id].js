import dbConnect from "../../../services/dbConnect"
import BookSchema from "../../../models/books"

dbConnect()

export default async (req, res) => {
	const {
		query: { id },
		method,
	} = req

	switch (method) {
		case "GET":
			try {
				const oneData = await BookSchema.findById(id)

				if (!oneData) {
					return res.status(400).json({ success: false })
				} else {
					res.status(200).json({ success: true, data: oneData })
				}
			} catch (error) {
				res.status(400).json({ success: false })
			}
			break
		case "PUT":
			try {
				const updateData = await BookSchema.findByIdAndUpdate(
					id,
					req.body,
					{
						new: true,
						runValidators: true,
					}
				)

				if (!updateData) {
					return res.status(400).json({ success: false })
				} else {
					res.status(200).json({ success: true, data: updateData })
				}
			} catch (error) {
				res.status(400).json({ success: false, error: error })
			}
			break
		case "DELETE":
			try {
				const delData = await BookSchema.deleteOne({ _id: id })

				if (!delData) {
					return res.status(400).json({ success: false })
				} else {
					res.status(200).json({ success: true, data: {} })
				}
			} catch (error) {
				res.status(400).json({ success: false, error: error })
			}
			break
		default:
			res.status(400).json({ success: false })
			break
	}
}
