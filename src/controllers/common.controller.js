// const fs = require('fs')
// const path = require('path')

module.exports.ping = async (_request, response) => {
    response.send("<h1>Pong!! </h1>")
    return
}

// Home Page
module.exports.home = async (_request, response) => {
    let render_data = { success: true, message: "" }

    // add any dynamic data here

    return response.render("home", render_data)
}
