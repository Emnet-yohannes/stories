import React from 'react'
import {Card ,CardActions, CardContent, CardMedia, Button ,Typography} from '@material-ui/core'
import { useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import useStyles from '../styles'
import moment from 'moment'
import {deletePost,likePost} from '../../../actions/actionPosts'
const Post = ({post,setCurrentId}) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const handleDelete = value =>()=>{
        console.log(value);
        dispatch(deletePost(value))

    }
    return (
    //    <>
    //    <h1>
    //        Post
    //    </h1>
    //    </>
    <Card>
        <CardMedia image={post.selectedFile} style={{height:"150px"}} title={post.title}/>
        <div>
            <Typography variant='h6'>{post.creator}</Typography>
            <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
        </div>
        <div>
            <Button style={{color:"black",size:"small"}} onClick={()=>setCurrentId(post._id)}>
                
                <MoreHorizIcon fontSize="default" />
            </Button>
        </div>
        <div>
        <Typography variant='body2' color="textSecondary">{post.tags.map((tag)=>`#${tag} `)}</Typography>
        </div>
        <Typography variant="h5" gutterBottom>
                {post.title}
            </Typography>
        <CardContent>
            <Typography variant="h5" gutterBottom>
                {post.message}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" color="primary" onClick={()=>{dispatch(likePost(post._id))}}>
                <ThumbUpAltIcon fontSize="small"/>
                {post.likeCount}
            </Button>
            <Button size="small" color="primary" onClick={handleDelete(post._id)}>
                <DeleteIcon fontSize="small"/>
                delete
            </Button>
        </CardActions>
    </Card>
    )
}

export default Post
