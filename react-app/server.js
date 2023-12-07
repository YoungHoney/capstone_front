express = require('express');
const path = require('path');
const proxy = require('express-http-proxy');

const app = express();


app.use('/ancestor', proxy('http://3.39.127.44:8080', {
	  proxyReqPathResolver: req=> `/ancestor${req.url}`
}));

app.use('/1/api/chat', proxy('http://3.39.127.44:8080', {
	  proxyReqPathResolver: req => `/1/api/chat${req.url}`
}));


app.use(express.static(path.join(__dirname, 'build')));


app.get('*', (req, res) => {
	  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = 3000;
app.listen(port, () => {
	  console.log(`Server is up on port ${port}`);
});

