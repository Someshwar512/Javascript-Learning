const http=require("http");

const server=http.createServer((req,res)=>{
res.end("Hello for node js server");
    
});

server.listen(3000,()=>{
console.log("Server Running sucess");

})

