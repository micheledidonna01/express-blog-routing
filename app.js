const port = 3001;
const express = require('express');
const app = express();
const posts = require('./data/posts.js');
//routers
const postsRouter = require('./routers/posts.js');

app.use(express.static('public'));
app.use('/lists', postsRouter);

app.get('/', (req, res) => {
    res.send('Sono nella pagina principale');
});

app.listen(port, ()=>{
    console.log(`Sono un server sulla porta ${port}`);
});


