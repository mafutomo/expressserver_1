const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, function(){
  console.log(`hello from port ${port}`);
});

app.get('/api', function(req, res, next){
  res.send('hello from api!')
})

app.use(function(req, res, next){
  res.status(404).json({error: "404 not found"})
})
