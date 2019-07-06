require('./db/mongoose')
const Task = require('./models/task')

// Task.findByIdAndDelete('5d1f27dd4cdd98e9fcfd61e9').then(() => {
//     return Task.countDocuments({ completed: false })
// }).then((count) => {
//     console.log(count)
// }).catch((error) => {
//     console.log(error)
// })

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed:false })
    return count
}

deleteTaskAndCount('5d1f54013e2b65eab2aa5cbb').then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})