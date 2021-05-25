const http = require('http');
fs = require('fs'); //require file system object
const port = 8000;


// Create a server to listen at port 8000

   const server = http.createServer(function(req, res){

        fs.readFile('v1/products.json', function(error, data) {
            if (error) {
                res.writeHead(404)
                res.write('Error : File Note Found')
            } else {
                res.write(data)
            }
            res.end()
        })
   })

   server.listen(port, function(error){
       if (error) {
        console.log('Something went wrong', error)
       } else {
           console.log('server is listening on port ' + port)
       }
       
   })