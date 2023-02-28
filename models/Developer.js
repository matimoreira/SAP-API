const { Schema, model, Types } = require('mongoose')

const devSchema = new Schema({
  name: String,
  skills: [{ type: Types.ObjectId, ref: 'Skill' }],
  seniority: String,
  presentation: String,
  picture: String,
  email: String,
  isActive: Boolean
}, { versionKey: false })

const Developer = model('Developer', devSchema)
module.exports = Developer
