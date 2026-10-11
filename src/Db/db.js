const mongoose = require("mongoose")
const { env } = require("../Config/env")

exports.connectDb = async()=>{
    try {
        await mongoose
        .connect(env.MONGOOSE_URL)
        .then(()=>{console.log("Database Connected Successfully");
        })
        .catch(()=>{console.log("Database Connection Failed");
        })
    } catch (error) {
     console.log("Something went wrong");
        
    }
}