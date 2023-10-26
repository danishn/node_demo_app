const Op = require('sequelize').Op
const User = require('../database/models/user.model')
const User_Validator = require('../validators/user.validator')

module.exports.get_all = async (_request, response) => {
    console.log(`Get all users.`)
    let users = await User.get_all()

    if (users.length === 0) {
        return response.json({
            success: false,
            message: "Oops! Users not found. Please try again.",
            data: {}
        })
    }

    return response.json({
        success: true,
        message: 'Users retrieved successfully.',
        data: { users: users }
    })
}

module.exports.create = async (request, response) => {
    await User_Validator.create_user(request.body)
    console.log(`Create new user: ${JSON.stringify(request.body)}`)

    let create_model = await get_user_create_model(request.body)

    let existing_record = await User.find_one_where({
        [Op.or]: [
            { email: create_model.email },
            { mobile: create_model.mobile }
        ]
    })

    if (existing_record) {
        console.log(`An user already exist with provided details: ${existing_record.id}`)
        return response.json({
            success: false,
            message: "Oops! User already exist with same details [email, mobile]. Please try again.",
            data: {}
        })
    }

    let entity = await User.create(create_model)
    if (!entity) {
        console.log(`Failed to create user.`)
        return response.json({ success: false, message: "Oops! Failed to create new user. Please try again.", data: {} })
    }
    console.log(`New org user registered successfully: ${entity.id}`)

    return response.json({
        success: true,
        message: 'User added successfully.',
        data: { user: entity }
    })
}

async function get_user_create_model(request_body) {
    let entity = {}

    entity.title = request_body.title
    entity.first_name = request_body.first_name
    entity.last_name = request_body.last_name
    entity.email = request_body.email
    entity.mobile = request_body.mobile
    entity.role_id = request_body.role_id
    entity.is_active = true

    return entity
}