const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for Tutorial
const TutorialSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	link: {
		type: String,
		required: true,
		unique: true
	},
	description: {
		type: String,
		required: true
	},
	tags: [String],
	medium: {
		type: String,
		required: true
	},
	educator: {
		type: String
	},
	type: {
		type: String,
		required: true
	},
	skillLevel: {
		type: String,
		required: true
	},
	submittedBy: {
		type: Schema.Types.ObjectId,
		ref: 'user'
	},
	submittedOn: {
		type: Date,
		default: Date.now
	},
	upvotes: [
		{
			type: Schema.Types.ObjectId,
			ref: 'user'
		}
	],
	reviews: [
		{
			review: {
				type: String
			},
			reviewedBy: {
				type: Schema.Types.ObjectId,
				ref: 'user'
			}
		}
	]
});

const Tutorial = mongoose.model('tutorial', TutorialSchema);

module.exports = Tutorial;
