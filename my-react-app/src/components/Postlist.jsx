import classes from "./PostLists.module.css"
import Post from "./Post";
import NewPost from "./NewPost";
import { useState } from "react";
function Postlist() {
    const [text , setText] = useState("");
    const [name , setName] = useState("");
    function handlText(event){
        setText(event.target.value);
    }
    function handleName(event){
        setName(event.target.value);
    }
    return (
        <>
        <NewPost ontext = {handlText} onname = {handleName} />
        <ul className = {classes.posts}>
        <Post author = {name} body = {text} />
        <Post author ={name} body ={text}/>
        </ul>
        </>
    )
}
export default Postlist;