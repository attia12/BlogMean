const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/test1').then(()=>{
    console.log('connected');
}).catch((err)=>{

    console.log(err);
})



module.exports=mongoose;
