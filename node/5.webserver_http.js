const http= require('http'); // why did we use const, value defined with this can not be defined again

const server= http.createServer(
    function(req, res)
    {
        res.end("hello people. how are you");
    }
)

server.listen(4242,
    function()
    {
        console.log("Server has started on 4242");
    }
    )