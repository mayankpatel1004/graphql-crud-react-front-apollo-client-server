const Sequelize = require("sequelize");
const sequelize = new Sequelize("all-india","root","",{
    host: "localhost",
    dialect: "mysql",
    logging: true
})

sequelize.authenticate()
.then(() => {console.log("Connected.............")})
.catch(e => {console.log("Error",e)})

module.exports = sequelize;