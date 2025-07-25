import express from "express"
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send({status: 1, msg: "Get"})
})

app.get("/news/:id", (req, res) => {
    res.send({id: req.params.id})
})

app.post("/login", (req, res) => {
    console.log(req.body);
    res.send({ 
        status: 2, 
        msg: "Post Login", 
        reqBody: req.body,
        reqQuery: req.query
    })
})

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server is running at port no. ${PORT}`);
})