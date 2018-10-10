const Alias = require('./alias')

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config = Alias.config(__dirname + '/interact.cfg', config, __dirname)

    return config
}
