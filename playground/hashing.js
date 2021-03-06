const { SHA256 } = require('crypto-js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

let password = '123abc!'

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash)
//   })
// })

// the above function generated this hashed password

let hashedPassword = '$2a$10$uAfdJJKinaatvNpPL0JQTeAc83Z0NISCrrYNZ6YM/AT8vP0wPcoIy'

// now we can compare this to the plain string

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res)
})

// let data = {
//   id: 10
// }

// let token = jwt.sign(data, '123abc')

// let decoded = jwt.verify(token, '123abc')
// console.log('Decoded:', decoded)

// let message = 'He is number 6'
// let hash = SHA256(message).toString()

// console.log(`Message: ${message}`)
// console.log(`Hash: ${hash}`)

// let data = {
//   id: 4
// }

// let token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString()

// if (resultHash === token.hash) {
//   console.log('Data was not changed')
// } else {
//   console.log('Data was changed. Do not trust!')
// }