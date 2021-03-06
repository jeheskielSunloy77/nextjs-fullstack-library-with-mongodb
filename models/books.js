const mongoose = require("mongoose")

const BookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
	cover: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
		required: true,
	},
	bookLink: {
		type: String,
		required: true,
	},
})

module.exports = mongoose.models.books || mongoose.model("books", BookSchema)
