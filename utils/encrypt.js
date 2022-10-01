const bcrypt =  require('bcrypt')

module.exports = {
  generateHash: (value) => (
    bcrypt.hashSync(value, bcrypt.genSaltSync(8))
  ),
}