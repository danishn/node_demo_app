const db = require('../connection')
const User = db.users
// const Op = require('sequelize').Op

// Create user
module.exports.create = async (new_user) => {
	const created = await User.create(new_user)
	// remove unwanted fields
	delete created.dataValues.password

	return created
}

// Fetch all users
module.exports.get_all = async () => {
	const records = await User.findAll({
		limit: 100,
		offset: 0,
		attributes: { exclude: ["password"] }
	})

	return records
}

// Find One By where clause
module.exports.find_one_where = async (where_clause) => {
	where_clause.is_active = true

	const record = await User.findOne({
		where: where_clause
	})

	return record
}

// Find One By id
module.exports.get_by_id = async (id) => {
	const user_instance = await User.findOne({
		where: { id: id, is_active: true }
	})

	return user_instance
}

// Update
module.exports.update = async (id, update_fields) => {
	await User.update(
		update_fields,
		{ where: { id: id } }
	)

	const user_instance = await User.findOne({
		where: { id: id }
	})

	return user_instance
}

// delete One By id
module.exports.delete_by_id = async (id) => {
	const deleted = await User.destroy(
		{ where: { id: id } }
	)

	return deleted
}
