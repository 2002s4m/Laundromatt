const http = require('http')
const fs = require('fs')
const url = require('url')

const indexPage = fs.readFileSync(`${__dirname}/index.html`,'utf-8')
const checkPage = fs.readFileSync(`${__dirname}/check.html`,'utf-8')
const contactPage = fs.readFileSync(`${__dirname}/contact.html`,'utf-8')

const server = http.createServer((req, res) => {

    const {pathname,query} = url.parse(req.url,true)
    if (pathname == "/" || pathname == "/home") {
        res.end(indexPage)

    } else if(pathname == "/check.html"){
        res.end(checkPage)
    }else if(pathname == "/contact.html"){
      res.end(contactPage)
  }else {
        res.writeHead(404)
        res.end("<h1>Not Found</h1>")
    }
})
function checkTableAvailability() {
    var machine = [true, false, true, true, false, false,true,false,true,true];
    var availabilityElement = document.getElementById("availability");
    for (var i = 0; i < machine.length; i++) {
      if (machine[i]) {
        availabilityElement.innerHTML += "<p>เครื่องที่ " + (i + 1) + " ว่าง<br></p>";
      } else {
        availabilityElement.innerHTML += "<p>เครื่องที่ " + (i + 1) + " ไม่ว่าง<br></p>";
      }
    }
  }
server.listen(2020, 'localhost', () => {
    console.log("Start Server In Port 2020");
})
  