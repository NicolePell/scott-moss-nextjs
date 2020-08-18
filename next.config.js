const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

dotenvLoad()

const withNextEnv = nextEnv()

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    console.log("I'm in dev mode!")

    return withNextEnv(defaultConfig)
  }
  return withNextEnv(defaultConfig)
}
