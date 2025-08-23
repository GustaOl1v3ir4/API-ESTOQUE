const crypto = require('crypto')

function genereatePassword() {
    return crypto.randomBytes(18).toString('hex')
}

module.exports = genereatePassword