const fs = require('fs')
const path = require('path')

const express = require('express')

const port = process.env.PORT || 1337
const modulesDir = process.env.MODULES_DIR || path.join(__dirname, 'modules')

const app = express()

fs
  .readdirSync('modules')
  .filter((module) => module.endsWith('.js'))
  .forEach((module) => app.use(`/${module.replace('.js', '')}`, require(path.join(modulesDir, module))))

app.listen(port, () => console.log(`Phoney listening on :${port}`))
