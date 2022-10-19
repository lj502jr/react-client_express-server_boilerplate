import express from 'express'
const app = express()

app.get("/api", (req, res) => {
  res.json( {"users": ["userOne", "userTwo", "userThree", "userFour"] })
})

app.listen(5050, () => { console.log("Server started on port 5050") })
