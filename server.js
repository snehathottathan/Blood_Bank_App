let express = require('express')
const dotenv = require('dotenv');
const morgan = require('morgan')
const colors = require('colors')
const cors = require('cors');
const connectedDB = require('./config/db');
dotenv.config()

//mongodb connection
connectedDB();
const app = express()


// app.get('/', (req, res) => {
//     res.status(200).json({
//         message: "Welcome to blood bank app"
//     })
// })


//moddlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use('/', require('./routes/testRoutes'))

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Node server running in ${process.env.DEV_MODE} mode on ${process.env.PORT} `.bgBlue.white)

})