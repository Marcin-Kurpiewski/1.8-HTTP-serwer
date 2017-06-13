var http = require('http');
var server = http.createServer();
var fs= require('fs');


server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/page') {

        fs.readFile('./index.html', 'utf-8', function(err, data) {
            response.write(data); // tu zwracamy index.html jak leci, bezpośrednio z pliku
            console.log(data);
            response.end();});
        
    } else {
        fs.readFile('./photo.jpg', function(err, data) {
            response.writeHead(200, {'Content-Type': 'image/jpeg'});  // mówimy, że zwracany bedzie obrazek
            console.log(data);
            response.end(data); // wysyłamy obrazek do przeglądarki
        });
    }
});



server.listen(8080);