const express = require('express')
const uuid = require('uuid')
const cors = require('cors')
const swaggerFile = require('./swagger_output.json')
const swaggerUi = require('swagger-ui-express')
const app = express()

app.use(cors())
app.use(express.json())

app.use(
  '/',
  swaggerUi.serve,
  swaggerUi.setup(swaggerFile)
)

// Mock Data
let developers = [{
  _id: {
    $oid: '63edbc810011b08c0a5bea05'
  },
  name: 'Sebastian Benitez',
  seniority: 'Software Engineer Ssr',
  presentation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n                            enim ad minim veniam, quis nostrud exercitation ullamco laboris\n                            nisi ut aliquip ex ea commodo consequat.',
  picture: 'http://placehold.it/32x32',
  email: 'sbenitez@shifta.ls',
  skills: [
    {
      $oid: '63ef2564851b3a164e13e132'
    },
    {
      $oid: '63ef25640d42ea3d041bacd6'
    }
  ],
  isActive: true
}, {
  _id: {
    $oid: '63ef04ebc48ae86b5804d67d'
  },
  name: 'Matias Moreira',
  seniority: 'Software Engineer Ssr',
  presentation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n                            enim ad minim veniam, quis nostrud exercitation ullamco laboris\n                            nisi ut aliquip ex ea commodo consequat.',
  picture: 'http://placehold.it/32x32',
  email: 'sbenitez@shifta.ls',
  skills: [
    {
      $oid: '63ef2564851b3a164e13e132'
    },
    {
      $oid: '63ef2564a5d535082ce136e7'
    }
  ],
  isActive: true
}, {
  _id: {
    $oid: '63efb4fdc48ae86b5804d6ae'
  },
  name: 'Ivan Benitez',
  seniority: 'Software Engineer Tra',
  presentation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n                            enim ad minim veniam, quis nostrud exercitation ullamco laboris\n                            nisi ut aliquip ex ea commodo consequat.',
  picture: 'http://placehold.it/32x32',
  email: 'ibenitez@shifta.ls',
  skills: [
    {
      $oid: '63ef2564851b3a164e13e132'
    }
  ],
  isActive: true
}, {
  _id: {
    $oid: '63efe206c48ae86b5804d6b8'
  },
  name: 'Matias Sisco',
  seniority: 'Software Engineer Sr',
  presentation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n                            enim ad minim veniam, quis nostrud exercitation ullamco laboris\n                            nisi ut aliquip ex ea commodo consequat.',
  picture: 'http://placehold.it/32x32',
  email: 'matiass@shifta.la',
  skills: [
    {
      $oid: '63ef2564851b3a164e13e132'
    },
    {
      $oid: '63ef25640d42ea3d041bacd6'
    },
    {
      $oid: '63ef25649bb6180b76808380'
    },
    {
      $oid: '63ef256402a1b632f12e44cd'
    },
    {
      $oid: '63ef2564851b3a164e13e132'
    }
  ],
  isActive: true
}]

let skills = [
  {
    _id: {
      $oid: '63ef2564851b3a164e13e132'
    },
    name: 'MongoDB',
    tag: 'success',
    isActive: true
  },
  {
    _id: {
      $oid: '63ef2564a5d535082ce136e7'
    },
    name: 'Node',
    tag: 'success',
    isActive: true
  },
  {
    _id: {
      $oid: '63ef25640d42ea3d041bacd6'
    },
    name: 'SQL',
    tag: 'gradient',
    isActive: false
  },
  {
    _id: {
      $oid: '63ef25649bb6180b76808380'
    },
    name: 'MySQL',
    tag: 'primary',
    isActive: true
  },
  {
    _id: {
      $oid: '63ef25640fb79703192c295c'
    },
    name: '.Net Framework',
    tag: 'gradient',
    isActive: true
  },
  {
    _id: {
      $oid: '63ef256402a1b632f12e44cd'
    },
    name: 'C#',
    tag: 'graddient',
    isActive: true
  },
  {
    _id: {
      $oid: '63ef25648c761c45c1082690'
    },
    name: 'Next.js',
    tag: 'default',
    isActive: true
  },
  {
    _id: {
      $oid: '63ef2564e6cf975350c1d0df'
    },
    name: 'JQuery',
    tag: 'warning',
    isActive: true
  },
  {
    _id: {
      $oid: '63ef268d0ed5d765cdc62429'
    },
    name: 'NextUI',
    tag: 'default',
    isActive: true
  },
  {
    _id: {
      $oid: '63ef268dbc0ac7e330941719'
    },
    name: 'API REST',
    tag: 'gradient',
    isActive: true
  },
  {
    _id: {
      $oid: '63ef268d9d09ee667086797d'
    },
    name: 'React',
    tag: 'warning',
    isActive: true
  },
  {
    _id: {
      $oid: '63ef268de909370b4740e5d7'
    },
    name: 'Unit Test',
    tag: 'success',
    isActive: true
  },
  {
    _id: {
      $oid: '63ef268d37a537d94b429ee2'
    },
    name: 'Transact SQL',
    tag: 'gradient',
    isActive: true
  },
  {
    _id: {
      $oid: '63ef268d1e08dd9951b8df98'
    },
    name: 'Razor',
    tag: 'gradient',
    isActive: true
  },
  {
    _id: {
      $oid: '63ef268df1714d0d027345c5'
    },
    name: 'Xamarin',
    tag: 'gradient',
    isActive: true
  },
  {
    _id: {
      $oid: '63ef268d2617ce9f5efba258'
    },
    name: 'Patern Design',
    tag: 'primary',
    isActive: true
  },
  {
    _id: {
      $oid: '63ef268db66354dd82775706'
    },
    name: 'Entity Framework',
    tag: 'gradient',
    isActive: true
  },
  {
    _id: {
      $oid: '63ef268dc6986c2abd74aa13'
    },
    name: 'Windows Form',
    tag: 'primary',
    isActive: true
  },
  {
    _id: {
      $oid: '63ef268d062a95ec1b649293'
    },
    name: 'Cobol',
    tag: 'default',
    isActive: false
  },
  {
    _id: {
      $oid: '63ef268df69f9fa98af33a70'
    },
    name: 'C++',
    tag: 'primary',
    isActive: true
  },
  {
    _id: {
      $oid: '63ef268de6ad2ba65dd07c10'
    },
    name: 'Canvas',
    tag: 'warning',
    isActive: true
  },
  {
    _id: {
      $oid: '63ef268dbed047bfa527ea71'
    },
    name: 'JavaScript',
    tag: 'warning',
    isActive: true
  }
]

// Functions
// Skills
function getAllSkills (request, response) {
  try {
    response.json(skills)
  } catch (error) {
    response.status(502).end()
  }
}

function getBySkillsByName (request, response) {
  try {
    const query = request.params
    const results = skills.filter(skill => skill.name.toLowerCase().includes(query.filter.toLowerCase()))
    results.length > 0 ? response.json(results) : response.status(400).end()
  } catch (error) {
    response.status(502).end()
  }
}

function createSkill (request, response) {
  const skill = request.body
  const newID = uuid.v4()
  const newskill = {
    _id: {
      $oid: newID
    },
    name: skill.name,
    tag: skill.tag,
    isActive: skill.isActive
  }
  skills = [...skills, newskill]
  response.json(newskill)
}

// Developers
function getAllDevelopers (request, response) {
  try {
    response.json(developers)
  } catch (error) {
    response.status(502).end()
  }
}

function getByDevelopersByName (request, response) {
  try {
    const query = request.params
    const results = developers.filter(dev => dev.name.toLowerCase().includes(query.filter.toLowerCase()))
    results.length > 0 ? response.json(results) : response.status(400).end()
  } catch (error) {
    response.status(502).end()
  }
}

function createDevelopers (request, response) {
  const dev = request.body
  const newID = uuid.v4()
  const newDev = {
    _id: {
      $oid: newID
    },
    name: dev.name,
    seniority: dev.seniority,
    presentation: dev.presentation,
    picture: dev.picture,
    email: dev.email,
    skills: [],
    isActive: dev.isActive
  }
  developers = [...developers, newDev]
  response.json(newDev)
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

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`)
})

module.exports = app
