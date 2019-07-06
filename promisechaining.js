require('./db/mongoose')
const Task = require('./models/task')

Task.findByIdAndDelete('5d1f27dd4cdd98e9fcfd61e9').then(() => {
    return Task.countDocuments({ completed: false })
}).then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})