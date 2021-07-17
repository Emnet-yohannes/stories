import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js'
import dotenv from 'dotenv';


const app = express();
dotenv.config();
//express middleware to connect this to our application
//the next code will make every routes inside posts to be accessed using /posts



app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(cors());
app.use('/posts',postRoutes);

app.get('/',(req,res)=>{
        res.send('hello to stories API');       
})
//db connection
// const CONNECTION_URL = 'mongodb+srv://emnetmern:emnetmern123@cluster0.ofkgg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000
mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
        .then(()=>app.listen(PORT,()=>console.log(`server started at port : ${PORT}`)))
        .catch((error)=>console.log(error.message));
mongoose.set('useFindAndModify',false);
