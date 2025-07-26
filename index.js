import dotenv from "dotenv"
dotenv.config()
import express from "express"
import connectionDB from "./utils/dbCollection.js"

const app = express()

app.use(express.json())

app.post('/api/enquiry', (req, res) => {
    res.status(200).json({msg: req.body})
})


const PORT = process.env.PORT || 9000

connectionDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at port no: ${PORT}`);
    })
})
.catch(() => {
    console.log('MongoDB is not connected');
})