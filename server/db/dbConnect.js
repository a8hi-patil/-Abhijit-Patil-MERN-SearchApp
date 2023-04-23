const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const connect = await mongoose.connect("mongodb+srv://abhipatil8806:admin@cluster0.uquhwde.mongodb.net/AddSearch?retryWrites=true&w=majority")
        console.log("Connected to database :", connect.connection.name)
    } catch (err) {
        console.log(err)
    }
}
module.exports = connectDB 