import mongoose from 'mongoose';

//first we have to create mongoose schema

const postSchema = mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date()
    },
});
//we have to turn the schema to model
const PostMessage = mongoose.model('PostMessage',postSchema);
export default PostMessage;