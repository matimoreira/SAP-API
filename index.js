require('./mongoose/mongo')

const express = require('express')
const cors = require('cors')
const swaggerFile = require('./swagger/swagger_output.json')
const swaggerUi = require('swagger-ui-express')
const app = express()
const Developer = require('./models/Developer')
const Skill = require('./models/Skill')

app.use(cors())
app.use(express.json())

app.use(
  '/doc',
  swaggerUi.serve,
  swaggerUi.setup(swaggerFile)
)

function getAllSkills (request, response) {
  try {
    Skill.find({}).then(devs => {
      response.json(devs)
    })
  } catch (error) {
    response.status(502).end()
  }
}

function getBySkillsByName (request, response) {
  try {
    const { filter } = request.params
    // Esto vendria a ser el equivalente a un like en sql
    Skill.find({ name: { $regex: '.*' + filter + '.*' } }).then(devs => {
      devs.length > 0 ? response.json(devs) : response.status(400).end()
    })
  } catch (error) {
    response.status(502).end()
  }
}

function createSkill (request, response) {
  const newItem = request.body
  const newskill = new Skill({
    name: newItem.name,
    tag: newItem.tag,
    isActive: newItem.isActive
  })
  newskill.save().then(insertedSkill => {
    response.json(insertedSkill)
  })
}

// Developers
function getAllDevelopers (request, response) {
  try {
    Developer.find({}).then(devs => {
      response.json(devs)
    })
  } catch (error) {
    response.status(502).end()
  }
}

function getByDevelopersByName (request, response) {
  try {
    const { filter } = request.params
    Developer.find({ name: { $regex: '.*' + filter + '.*' } }).then(devs => {
      devs.length > 0 ? response.json(devs) : response.status(400).end()
    })
  } catch (error) {
    response.status(502).end()
  }
}

function createDevelopers (request, response) {
  const newItem = request.body
  const newDev = new Developer({
    name: newItem.name,
    seniority: newItem.seniority,
    presentation: newItem.presentation,
    picture: newItem.picture,
    email: newItem.email,
    skills: newItem.skills,
    isActive: newItem.isActive
  })
  newDev.save().then(insertedDev => {
    response.json(insertedDev)
  })
}

// Skills

// GET
app.get('/api/skills', (req, res) => { getAllSkills(req, res) })
app.get('/api/skills/:filter', (req, res) => { getBySkillsByName(req, res) })
// POST
app.post('/api/skills', (req, res) => { createSkill(req, res) })

// Developers

// GET
app.get('/api/developers', (req, res) => { getAllDevelopers(req, res) })
app.get('/api/developers/:filter', (req, res) => { getByDevelopersByName(req, res) })
// POST
app.post('/api/developers', (req, res) => { createDevelopers(req, res) })

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`)
})

module.exports = app
