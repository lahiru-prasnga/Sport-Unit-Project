import ParentComponent from "./ParentComponent";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
   
import Login from './Components/Login.js'
import FogotPWD from './Components/FogotPWD.js';

const App = () => {
  return (
    <div>
      <ParentComponent />
      
    </div>
  );
};

export default App;
