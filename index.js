//import json library

const  jsonServer = require('json-server')

//create server

const mediaPlayerServer = jsonServer.create()

//middleware to parse the json frmat

const middleware = jsonServer.defaults()

//setup a path to store data
const router = jsonServer.router('db.json')

mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)




//port
const PORT = 4000 || process.env.PORT

//to listern to the request from frontend for resolving that req
mediaPlayerServer.listen(PORT, ()=>{
    console.log(`server running successfully at port number ${PORT}`);
    
})