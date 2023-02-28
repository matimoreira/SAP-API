require('dotenv').config()
const mongoose = require('mongoose')
const uri = process.env.MONGODB_URI // your mongodb connection string

mongoose.set('strictQuery', false)
mongoose.connect(uri)
  .then(() => {
    console.log('Database connected')
  }).catch((err) => {
    console.error(err)
  })
