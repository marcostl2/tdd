const faker=require('faker')
const { factory } = require('factory-girl')
const { User } = require("../src/app/models")

//NOME DO MODEL - MODEL - 
factory.define('User', User, {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password()
})

module.exports=factory