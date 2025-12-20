import MainHeader from "./components/MainHeader";
import Post from "./components/Post";
import Postlist from "./components/Postlist";
import { useState } from "react";
function App() {
    const [isVisible , setVisible] = useState(true);
    function showdetails(){
         setVisible(true);

    }
    function hidedetails(){
      setVisible(false);
    }

   return (
      <>
      <MainHeader onCreatePost = {showdetails}/>
   <main>
      <Postlist isPosting = {isVisible} isnotPosting={hidedetails}/>
   </main>
   </>
   )
}
export default App;