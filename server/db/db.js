const mongoose = require('mongoose')
// const MONGO_URI = process.env.MONGO_URI

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`\n\tMongoDB Connected on:\n`.blue + `\t${conn.connection.host}\n`.cyan)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = dbConnect