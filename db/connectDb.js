const mongoose = require('mongoose')
const local_URL = 'mongodb://127.0.0.1:27017/admssion_Portal'

const connectDb = () => {
    return mongoose.connect(local_URL)
        .then(() => {
            console.log('connect Success')
        }).catch((error) => {
            console.log(error)
        })
}
module.exports = connectDb