import classes from "./PostLists.module.css"
import Post from "./Post";
function Postlist() {
    return (
        <ul className = {classes.posts}>
        <Post author = "Rehan" body = "Rehan is the tester for fcra"/>
        <Post author = "Adityuan" body = "His cr are going to handopver to me"/>
        </ul>
    )
}
export default Postlist;