const jwt = require('jsonwebtoken')

const myFucntion = async () => {
    const token = jwt.sign({_id: 'abc123'}, 'rohanrohan', {expiresIn: '7 days'})
    console.log(token)

    const data = jwt.verify(token, 'rohanrohan')
    console.log(data)
}

myFucntion()