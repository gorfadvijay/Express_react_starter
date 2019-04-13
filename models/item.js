const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
	name: {
		type: String,
		require,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Item = mongoose.model('ShopingList', ItemSchema);
