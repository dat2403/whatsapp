import express from "express";
import bodyParser from "body-parser";
import userRoute from "./routes/userRoute.js";
import chatRoute from "./routes/chatRoute.js";
import {connectDb} from "./config/db.js";

const app = express()

const urlencodedParser = bodyParser.urlencoded({extended: false})
app.use(bodyParser.json(), urlencodedParser);

app.use('/api/user', userRoute);
app.use('/api/chat', chatRoute)

await connectDb()
const PORT = process.env.PORT || 5000
app.listen(PORT, function () {
    console.log(`Server started at PORT ${PORT}`);
})
