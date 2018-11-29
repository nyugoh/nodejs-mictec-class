const express = require('express');
const app = express();

// GET / ~ home page
app.get('/', function(request, response) {
    response.json({ message: 'Your are on home page  !!!'});
    console.log('Your are on home page  !!!');
});

//GET /login
app.get('/login', (req, res)=> {
    res.send('Login page');
});

app.listen(3000, ()=> {
    console.log('Server is running on port :3000');
});