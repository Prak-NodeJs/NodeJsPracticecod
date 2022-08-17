const http = require('http');

const fs = require('fs');
var requests = require('requests');
const homeFile = fs.readFileSync("home.html", 'utf-8');

const replaceVal = (tempval, orgval) => {
   let temperature = tempval.replace("{%tempval%}", orgval.main.temp);
   temperature = temperature.replace("{%tempmin%}", orgval.main.temp_min);
   temperature = temperature.replace("{%tempmax%}", orgval.main.temp_max);
   temperature = temperature.replace("{%location%}", orgval.name);
   temperature = temperature.replace("{%country%}", orgval.sys.country);
   temperature = temperature.replace("{%tempstatus%}", orgval.weather[0].main);

   return temperature;
}

const server = http.createServer((req, res) => {
   if (req.url == "/") {
      requests("https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=ff2f3b146eba810d98a3095ce321127c")
         .on('data', (chunk) => {
            const objData = JSON.parse(chunk);
            const arrData = [objData];

            // console.log(arrData[0].main.temp);
            const realTimeData = arrData.map(val => replaceVal(homeFile, val)).join(" ");

            res.write(realTimeData)
            // console.log(realTimeData);
         })
         .on('end', function (err) {
            if (err) return console.log('connection closed due to errors', err);

            res.end();
         });

   }
});

server.listen(8000, 'localhost');