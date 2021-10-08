const express = require("express");
const cors = require('cors');
const app = express();
const PORT = 3002;
const {graphqlHTTP} = require("express-graphql");

const schema = require("./Schema/index");

app.use(express.json());
app.use(cors());

app.use(function(req, res) {
    req.header('Access-Control-Allow-Origin', '*');
    req.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
});

var db = require('./models');
var root = {
    ip: '192.168.0.1',
    accessKey: 'fdsffffdfewrqegdgfghvbnbcvzxvxzzz',
    dbConfig: db
}

const context = async (req) => {
    const host = req.headers.host;
    const token = "todaytoken";   
    return {host, token};
}

app.use("/graphql",
graphqlHTTP(async (req) => ({
    schema,
    rootValue: root,
    graphiql: true,
    context: () => context(req)
}))
)

app.listen(PORT,() => {
    console.log(`App is listening port ${PORT}`);
});