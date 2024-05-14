// //connection to mongodb


// const mongoose=require('mongoose');
// const mongoURI="mongodb://localhost:27017/notebook";


// async function connectTomongo ()
// { try{
//    await mongoose.connect(mongoURI);
//     console.log("connected to mongodb");
// }
// catch(error)
// {
//     console.log("error");
// }
// }
// module.exports=connectTomongo;








const mongoose=require('mongoose');

const mongoURI="mongodb://localhost:27017/noteapp";

const mongoConnect=async()=>{
  try{
    await mongoose.connect(mongoURI);
    console.log("connection succesful");
  }
  catch(error)
  {
    console.log("error");
  }
}

module.exports=mongoConnect;

















