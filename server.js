const express = require('express');

const app = express()

const cors = require('cors');

const port = 3050

const bodyParser = require('body-parser');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Controll-Allow-headers", "*")
    next();
});

app.get('/',(req, res) => {
    const NewsAPI = require('newsapi');
    const news = new NewsAPI('84616c66f1224da88c20f8860d3d296c');
    //To query soyrces
    // All options are optional
    news.v2.everything({
        sources: 'bbc-news,the-verge',
        q: '',
        language: 'en',
    }).then(response => {
        console.log(response);
        res.send(response)
    });
    
});

app.get('/searching/:value',(req, res) => {
    const NewsAPI = require('newsapi');
    const news = new NewsAPI('84616c66f1224da88c20f8860d3d296c');
    news.v2.everything({
        sources: 'bbc-news,the-verge',
        q: `${req.params.value}`,
        language: 'en',
    }).then(response => {
        console.log(response);
        res.send(response)
    });
    
})

app.listen(port, ()=> {
    console.log((`Server is running ${port}`));
})