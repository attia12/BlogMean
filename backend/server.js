const express=require('express');
const app=express();
require('./config/connect')
const articleApi=require('./routes/article');
const authorApi=require('./routes/author');

app.use(express.json());

app.use('/article',articleApi);
app.use('/author',authorApi);


app.use('/getimage',express.static('./uploads'));

app.listen(3000,()=>
{
    console.log('servor work');
})