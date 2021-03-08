const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/config');

let server;
mongoose.connect(config.mongoose.url, config.mongoose.options)
.then(() => {
    console.log(`
            ✷  ✷  ✷  ✷  ✷  ✷  ✷  ✷  ✷
            ✷    Database Connected     ✷
            ✷  ✷  ✷  ✷  ✷  ✷  ✷  ✷  ✷
    `)
    server = app.listen(config.port, () => {
        console.log(`
            ✷  ✷  ✷  ✷  ✷  ✷  ✷  ✷  ✷  ✷  ✷  ✷ 
            ✷      Listening to Port : 8080        ✷
            ✷  ✷  ✷  ✷  ✷  ✷  ✷  ✷  ✷  ✷  ✷  ✷
    `)
    })
})