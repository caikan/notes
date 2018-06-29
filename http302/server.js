let http = require('http');
let url = require('url');
let template = `
<a href="/some/path">/some/path</a><br>
<a href="/302/this/is/a/test">/302/this/is/a/test</a><br>
<a href="/301/another/test">/301/another/test</a><br>
`;
http.createServer(function(request, response) {
	console.log(request.url);
	if (request.url.match(/^\/302/)) {
		response.writeHead(302, {
			'Location': '/?status=302&from='+encodeURIComponent(request.url),
			'Cache-Control': 'max-age=5, s-max-age=5',
		});
	} else if (request.url.match(/^\/301/)) {
		response.writeHead(301, {
			'Location': '/?status=301&from='+encodeURIComponent(request.url),
			'Cache-Control': 'max-age=5, s-max-age=5',
		});
	} else if (request.url.match(/^\/favicon\.ico(?=$|\/)/)) {
		response.writeHead(404, {});
		response.end();
		return;
	} else {
		response.writeHead(200, {
			'Content-Type': 'text/html',
			'Cache-Control': 'max-age=5',
		});
		response.write('Hello World 301/302<br><br>');
	}
	response.write('<h2>Template</h2>')
	response.write(template)
	response.write('<h2>Current</h2>')
	response.write(`<a href="${request.url}">${request.url}</a>`)
	let query = url.parse(request.url, true).query;
	console.log('query', query);
	if (query.from) {
		response.write('<h2>From</h2>')
		response.write(`<a href="${query.from}">${query.from}</a>`)
	}
	response.end();
}).listen(301);