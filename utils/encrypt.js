const bcrypt = require("bcrypt")

module.exports = {
    generateHash: (value) => {
        return bcrypt.hashSync(value, bcrypt.genSaltSync(8))
    },
}