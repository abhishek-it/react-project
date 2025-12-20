import classes from "./PostLists.module.css"
import Post from "./Post";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";
function Postlist({isPosting , isnotPosting}) {
    
   
    const [text , setText] = useState("");
    const [name , setName] = useState("");

    //define a function to show/hide the componnet
    function setVisibility(){
        setVisible(false);
    }
    function handlText(event){
        setText(event.target.value);
    }
    function handleName(event){
        setName(event.target.value);
    }
    return (
        <>
        {isPosting ?
        <Modal onClose = {isnotPosting}>
        <NewPost ontext = {handlText} onname = {handleName} />
        </Modal> :false}
        <ul className = {classes.posts}>
        <Post author = {name} body = {text} />
        
        <Post author ={name} body ={text}/>
    
        </ul>
        
        </>
    )
}
export default Postlist;