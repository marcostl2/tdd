const {User}=require('../../src/app/models')

describe('Authentication',()=>{
    it('should receive SWT token authenticated with valid credentials',async ()=>{
        const user=await User.create({
            name:"marcolino91",
            email:"marcolino91@gmail.com",
            password_hash:'123123'
        })
        console.log(process.env.NODE_ENV)
        console.log(process.env.DB_USER)
        console.log(process.env.DB_PASS)
        console.log('dialect: '+process.env.DB_DIALECT)
        expect(user.name).toBe('marcolino91')
    })
})