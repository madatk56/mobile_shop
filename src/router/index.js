const user = require('./users/index')
module.exports(app){
    app.use('/user',user)
}