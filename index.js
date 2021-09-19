// const fs = require("fs")
// console.log("Welcome Saurav to the first step of learning nodejs :) ");
//fs.writeFileSync("write.txt","Hello saurav you successfully write a content into file using nodejs")
//fs.appendFileSync("write.txt","\nNow you learnt to append some data to file using nodejs")
// const reading = fs.readFileSync("write.txt")
// console.log(reading.toString())
// fs.renameSync("write.txt","readwritefile.txt")
//fs.writeFileSync("write.txt","Hello we have learnt all the part of file like reading wring and appending.")
// const reading = fs.readFileSync("write.txt").toString()
// for (let index = 0; index < reading.length; index++) {
//     const element = reading[index];

//     console.log(element)
// fs.rmdirSync("saurav")
const os = require("os")
//console.log(os.homedir())
//hostname = os.hostname()

//netinterface = os.networkInterfaces()
//platform = os.platform()
// totalmemory = os.totalmem()
// console.log(totalmemory/1024/1024/1024)
// info = os.userInfo()
// version = os.version()
// cnsl = os.console
// const path = require('path')
// console.log(path)
const http = require("http");
// const url = require("url")

const server = http.createServer((req,res)=>{
    if(req.url=="/"){
    res.end("Hello from the other side");
    }
    else{
        res.writeHead(404,{"content-type":"text/html"})
        res.end("404 Page not found")
    }
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("listning on the port 8000")
})