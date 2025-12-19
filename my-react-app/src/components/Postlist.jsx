import classes from "./PostLists.module.css"
import Post from "./Post";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";
function Postlist() {
    //here we will declare a state to define visible and not
    const [isVisible , setVisible] = useState(true);
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
        {isVisible ?
        <Modal onClose = {setVisibility}>
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