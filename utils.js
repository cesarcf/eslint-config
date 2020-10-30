function getWpModuleResolver() {
  const wpConfig = require(`${process.env.PWD}/webpack.config`)
  const {
    resolve: { alias, extensions: wpExtensions }
  } = wpConfig({ NODE_ENV: 'development' })

  const wpAlias = []
  for (var key in alias) {
    if (alias.hasOwnProperty(key)) wpAlias.push([key, alias[key]])
  }

  return { wpAlias, wpExtensions }
}

module.exports = { getWpModuleResolver }
