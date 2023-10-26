// const fs = require('fs')
// const path = require('path')

module.exports.ping = async (request, response) => {
    response.json({ success: true, message: 'pong', data: {} })
    return
}
