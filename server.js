const express = require('express')
const path = require('path')

const app = express()
app.use(express.json())

const http = require('http').createServer(app)

app.use(express.json())

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Creates static folder for publicly accessible HTML, CSS and Javascript files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(express.static('./public'));
app.use(express.static(__dirname + './public', { maxAge: '30 days' }));
app.use(express.static(__dirname + '/../public'));
app.use(express.static(__dirname + '/static'));


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
  res.header("Access-Control-Expose-Headers", "Content-Type,Authorization");
  next();
});

// Routes
app.use('/', require('./routes/homeRouter'))
app.use('/promotion', require('./routes/promotionRouter'))
app.use('/categories', require('./routes/categoryRouter'))
app.use('/register', require('./routes/membershipRouter'))
app.use('/article', require('./routes/articleRouter'))
app.use('/rss', require('./routes/rssRouter'))
app.use('/contact', require('./routes/contactRouter'))



const port = process.env.PORT || 5000
http.listen(port, () => {
    console.log('Server is running on port', port)
})