const Alias = function () {

    const errorMessage = "Connection config not set, please call config(baseUrl, headers)"

    const config = (configFile, configOverride, rootDir) => {
        var fs = require('fs')
        var path = require('path')

        const resolveAliasPath = function (rootDir, alias = {}) {
            const keys = Object.keys(alias)
            const retVal = {}
            keys.forEach(function (key) {
                retVal[key] = path.resolve(rootDir, alias[key])
            })
            return retVal
        }

        const load = () => {
            const configStr = fs.readFileSync(configFile, { encoding: 'utf8', flag: 'a+' })
            if (configStr) {
                const configJson = JSON.parse(configStr)
                return configJson
            } else {
                throw new Error(configFile + " not found or does not contain alias section")
            }
        }

        const config = load()

        const externalAlias = resolveAliasPath(rootDir, config.alias.external)
        const internalAlias = resolveAliasPath(rootDir, config.alias.internal)
        var nodes
        configOverride.module.rules.forEach(rule => {
            if (rule.oneOf) {
                nodes = rule.oneOf
            } else {
                nodes = [rule]
            }
            nodes.forEach(node => {
                if (node.include && node.include === path.resolve(rootDir, 'src')) {
                    node.include = [
                        path.resolve(rootDir, 'src'),
                    ]
                    Object.keys(externalAlias).forEach(key => {
                        node.include.push(externalAlias[key])
                    })
                }
            })
        });

        configOverride.resolve = {
            modules: [
                path.resolve(rootDir, 'node_modules')
            ],
            alias: { ...internalAlias, ...externalAlias }


        }
        return configOverride;
    }

    return {
        config: config 
    }
}()

module.exports = Alias