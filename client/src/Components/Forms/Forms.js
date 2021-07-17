import React ,{useState,useEffect } from 'react'
import FileBase from 'react-file-base64';
import useStyles from './styles'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import {useDispatch} from 'react-redux';
import { createPost,updatePost } from '../../actions/actionPosts';
import {useSelector} from 'react-redux'


const Forms = ({currentId,setCurrentId}) => {
    console.log(currentId)
const post = useSelector((state)=>currentId ? state.postreducer.find((p)=>p._id===currentId):null)
    console.log(post)
    const [postData ,setPostData] = useState({creator:'',title:'',message:'',tags:'',selectedFile:''})
    const classes = useStyles();
    useEffect(()=>{
        if(post)
            
            setPostData(post)
            
            
        },[currentId])
        console.log(postData)

    const dispatch = useDispatch();
    const handleSubmit  =(e)=>{
        e.preventDefault();
        if(currentId){

            dispatch(updatePost(currentId, postData))
            
        }
        else{
            dispatch(createPost(postData))
        }
        clear()
    }
    const clear = () =>{
        // console.log(currentId.currentId)
        setCurrentId(null)
        setPostData({creator:'',title:'',message:'',tags:'',selectedFile:''});
    }
    return (
        <Paper className= {classes.paper}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant='h6'>
                   {currentId ? 'Editing' : "Creating"}  a memory
                </Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e)=>setPostData({...postData,creator:e.target.value})}/>
                <TextField name="title" variant="outlined" label="title" fullWidth value={postData.title} onChange={(e)=>setPostData({...postData,title:e.target.value})}/>
                <TextField name="message" variant="outlined" label="message" fullWidth value={postData.message} onChange={(e)=>setPostData({...postData,message:e.target.value})}/>
                <TextField name="tags" variant="outlined" label="tags" fullWidth value={postData.tags} onChange={(e)=>setPostData({...postData,tags:e.target.value.split(",")})}/>
                <div className={classes.fileInput}>
                    <FileBase 
                    type="file" 
                    multiple={false} 
                        onDone={ ({base64} )=> setPostData({...postData , selectedFile:base64})}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant='container' color='primary' size='large' type='submit' fullWidth>
                    Submit
                </Button>
                <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>
                    Clear
                </Button>
                    
                
                
            </form>


        </Paper>

    )
}

export default Forms
