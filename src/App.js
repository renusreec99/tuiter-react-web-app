import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import HomeScreen from "./tuiter/home";


function App() {
   return (
    <BrowserRouter>

      <div className="container">
         <Routes>
          <Route index
                 element={<Labs/>}/>
          <Route path="/hello"
                 element={<HelloWorld/>}/>
          <Route path="/tuiter/*"
                 element={<Tuiter/>}/>
                 
         <Route path="/tuiter/home"    element={<HomeScreen/>}/>
     


        </Routes>
       </div>
      </BrowserRouter>
   );
}
export default App;

