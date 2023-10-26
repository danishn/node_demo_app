'use strict';
require('dotenv').config()
const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')

// App
const app = express();

app.use(bodyParser.json({
    verify: (req, res, buf) => {
        req.rawBody = buf
    }
}))
app.use(bodyParser.urlencoded({ extended: true }))

// ================================= Views ==============================================
// all templates are located in `src/views` directory
app.set('views', path.join(__dirname, 'src/views'))
// here you set that you're using `ejs` template engine, and the default extension is `ejs`
app.set('view engine', 'ejs')
// path to public resources - js/css/fonts/images etc
app.use(express.static(path.join(__dirname, 'public')))

// ================================= Routing ==============================================
// All routing mechanism goes here
const api_v1_routes = require('./src/routes/api_v1_route.js')
const web_routes = require('./src/routes/web_route.js')

app.use('/api/v1', api_v1_routes)
app.use('/', web_routes)

app.use(function (request, _response, next) {
    console.log(`Ultimate missed URL:: ${request.originalUrl}`)
    let err = new Error('Not Found')
    err.status = 404
    next(err)
})

// ================================= Error Handler ==============================================
// no stacktraces leaked to user unless in development environment
app.use(function (err, _request, response, next) {
    console.log("API Error occurred!", err.Code || 500, err.stack)
    response
        .status(err.Code || 500)
        .json({ success: false, message: err.message, data: (process.env.ENVIRONMENT === 'DEVELOPMENT') ? err : null })
})


// ================================= Booting up Server ==============================================
let server = app.listen(process.env.PORT, () => {
    let host = server.address().address
    let port = server.address().port
    console.log(`Application listening at ${host}:${port}`)
    console.log(`Application ENVIRONMENT: ${process.env.ENVIRONMENT}`)
    console.log('----------------------- Server started ------------------------------')
});

// ================================= Alternate Boot up for Sequelize Connection ==============================================
// load DB connection to sync schema
// const db = require('./src/database/connection')
// db.sequelize.sync({ force: false }).then(async () => {
//     console.log('New tables created into DB...')
//     console.log(`Loaded global API key: ${process.env.GLOBAL_API_KEY}`)

//     let server = app.listen(process.env.PORT, function () {
//         let host = server.address().address
//         let port = server.address().port
//         console.log(`Application listening at ${host}:${port}`)
//         console.log(`Application ENVIRONMENT: ${process.env.ENVIRONMENT}`)
//         console.log('----------------------- Server started ------------------------------')
//     })
// })