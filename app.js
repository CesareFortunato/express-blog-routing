const express = require('express');
const app = express();
const port = 3000;

//importo router
const postsRouter = require ('./routers/posts');

app.use(express.static('public'));
app.use("./posts", postsRouter)

app.get('/', (req, res) => {
    res.send('<h1>Home del blog<h1/>')
    
})



app.listen(port, () => {
    console.log(`Esempio ${port}`)
})