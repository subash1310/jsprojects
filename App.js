

import { Routes, Route } from "react-router-dom";

import Interior from './gugan constructions/interior';
import Structure from "./gugan constructions/structure";
import Plans from "./gugan constructions/plans";
function App(){
  return (
 
  <Routes>
    <Route exact path= "/" element={<Structure/>}/>
    <Route exact path="Interior" element={<Interior/>}/>
    <Route exact path="Plans" element={<Plans/>}/>

  </Routes>


  
  );
}

export default App;
