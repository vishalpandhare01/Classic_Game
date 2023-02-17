import {BrowserRouter ,Route ,Routes} from "react-router-dom"


import Home from "./component/home";
import Main from "./component/main";
import Over from "./component/over";

function App() {
  return (
    <>
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/main" element={<Main/>}/>
       <Route path="/over" element={<Over/>}/>
    </Routes>
   </BrowserRouter>
   
    </>
  );
}

export default App;
