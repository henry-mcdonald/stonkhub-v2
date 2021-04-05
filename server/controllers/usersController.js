const router = require('express').Router()
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)
console.log(process.env.CLIENT_ID)

router.post("/login-with-google", async (req, res, next) => {
    const {token}  = req.body
     const ticket = await client.verifyIdToken({
         idToken: token,
         audience: process.env.CLIENT_ID
     });
     const { name, email, picture } = ticket.getPayload();    
     const user = await db.user.upsert({ 
         where: { email: email },
         update: { name, picture },
         create: { name, email, picture }
     })
     res.status(201)
     res.json(user)
})

module.exports = router

