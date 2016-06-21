var hostname = 'localhost', port = 3000,
    express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    dishRouter = require('./dishRouter'),
    promoRouter = require('./promoRouter'),
    leaderRouter = require('./leaderRouter');

var app = express();
app.use(morgan('dev'))
   .use(bodyParser.json())
//Mount routers
   .use('/dishes',dishRouter)
   .use('/promotions',promoRouter)
   .use('/leadership',leaderRouter)

   .use(express.static(__dirname + '/public'))

   .listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});
