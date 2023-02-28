const { Schema, model } = require('mongoose')

const skillSchema = new Schema({
  name: String,
  tag: String,
  isActive: Boolean
}, { versionKey: false })

const Skill = model('Skill', skillSchema)
module.exports = Skill
