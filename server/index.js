const express = require('express')
const connectDB = require('./config/db');
const cors = require('cors')
const colors = require('colors')
require("dotenv").config();
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')

const port = process.env.PORT || 3000

const app = express()

connectDB();

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})