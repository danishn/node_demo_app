const error_handler = require('../utils/error.handler');
const joi = require('joi');

///////////////////////////////////////////////////////////////////////////////////////////////

exports.create_user = async (requestBody) => {
    try {
        const schema = joi.object({
            title: joi.string().trim().min(2).max(20).required(),
            first_name: joi.string().trim().min(2).max(64).required(),
            last_name: joi.string().trim().min(2).max(64).required(),
            email: joi.string().trim().email().required(),
            mobile: joi.string().trim().min(10).max(15).required(),
            role_id: joi.number().integer().valid(1, 2).required(),
        });
        return await schema.validateAsync(requestBody)
    } catch (error) {
        error_handler.handleValidationError(error)
    }
}