const mongoose = require("mongoose")
const connectToMongo = () => {
    mongoose.connect("mongodb://0.0.0.0:27017/bustracking", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("mongodb connected successfully!!!");
    })
    .catch((e) => {
        console.log("mongo Failed");
        console.log("Error is:", e, "darshan");
    })
}



module.exports = connectToMongo;
