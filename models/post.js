const db = require('./db')

const Post = db.sequelize.define('itens',{
    name: {
        type: db.Sequelize.STRING
    }
})

module.exports = Post

//Post.sync({force:true})