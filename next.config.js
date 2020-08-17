const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    console.log("I'm in dev mode!")

    return defaultConfig
  }
  return defaultConfig
}
