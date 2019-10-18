const fs = require('fs')
const path = require('path')

const express = require('express')

const port = process.env.PORT || 1337
const modulesDir = process.env.MODULES_DIR || path.join(__dirname, 'modules')

const app = express()

app.get('/', (req, res) => res.send('<body style="margin:0;background-color:#000;color:#0F0;height:100vh;display:flex;justify-content:center;align-items:center"><pre>    ____  __  ______  _   __________  __\n   / __ \\/ / / / __ \\/ | / / ____/\\ \\/ /\n  / /_/ / /_/ / / / /  |/ / __/    \\  /\n / ____/ __  / /_/ / /|  / /___    / /\n/_/   /_/ /_/\\____/_/ |_/_____/   /_/</pre></body>'))

fs
  .readdirSync('modules')
  .filter((module) => module.endsWith('.js'))
  .forEach((module) => app.use(`/${module.replace('.js', '')}`, require(path.join(modulesDir, module))))

app.listen(port, () => console.log(`Phoney listening on :${port}`))
