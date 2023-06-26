const mongoose=require('mongoose');
const Article=require('./article');
const Author =mongoose.model('Author',{

    name : {
        type : String

    },

    lastname : {
        type : String

    },
    email : {
        type : String,
        unique :true

    },
    password: {
        type : String


    },
    about : {
        type : String

    },
    image : {
        type : String

    },
    articles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'
    }]

})
module.exports=Author;