var http = require('http');

http.createServer(function (req, res)
	{
		res.write('this is my node js project and pls share this');
		res.end();

	}).listen(3000);



