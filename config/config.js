const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.join(__dirname,'../.env')})

const config = {
    port: process.env.PORT,
    mongoose: {
        url: process.env.MONGODB_URL,
        options: {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    }
}

module.exports = config