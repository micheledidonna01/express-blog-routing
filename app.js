const port = 3001;
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Sono nella pagina principale');
});

app.listen(port, ()=>{
    console.log(`Sono un server sulla porta ${port}`);
});