import Tuiter from "./explore";

import {Routes, Route} from "react-router";
import HomeScreen from "./home";


function TuiterPage() {
 return (
  <div>
<Routes>
<Route index   element={<HomeScreen/>}/>
<Route path="home"    element={<HomeScreen/>}/>
<Route path="explore" element={<Tuiter/>}/>
</Routes>
</div>
 );
}

export default TuiterPage
