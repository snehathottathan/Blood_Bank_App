let express = require('express')

const app = express()


app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to blood bank app"
    })
})

const PORT = 8080

app.listen(PORT, () => {
    console.log(`server connected `)

})