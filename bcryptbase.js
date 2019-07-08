const bcrypt = require('bcryptjs')

const baseFunction = async () => {
    const password = 'Red1234!'
    const hashedPassword = await bcrypt.hash(password, 8)
    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcrypt.compare('red1234!', hashedPassword)
    console.log(isMatch)
}

baseFunction()