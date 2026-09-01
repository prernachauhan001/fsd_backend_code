//status code for network 200:success,404:pagenot found
//Practice routing using http module in nodejs
import http from "http";
const server = http.createServer((req, res) =>{

  if(req.url=="/"){
    res.writeHead(200);
    res.end("<h1>this is Home page</h1>");
  }
  else if(req.url=="/about"){
    res.writeHead(200);
    res.end("<h1>this is about page</h1>");
  }
  else if(req.url=="/contact"){
    res.writeHead(200);
    res.end("<h1>this is contact page</h1>");
  }
  else{
    res.writeHead(404, () => {
      console.log("page not found");
    });
    res.end("<h1>Page not found</h1>");
    }
})
  
server.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
})