
import './App.css';
import Home from './Components/Home';
import Dash from './Components/Dash';
import {Routes, Route} from 'react-router-dom'
import Header from './Components/Header';
import User from './Components/User';
import NestHeader from './Components/NestHeader';
import Education from './Components/Education';
import WorkExperience from './Components/WorkExperience';
import AchieveComp from './Components/AchieveComp';
import EduComp from './Components/EduComp';
import WorkComp from './Components/WorkComp';
import Achievement from './Components/Achievement';
import { useEffect } from 'react';
function App() {
  
  var c=[{company:"",role:"",description:"",start_date:"", end_date:""}];
    var d=[{institute:"",degree:"",start_date:"", end_date:"",description:""}];
    var e=[{achievement:""}]
    localStorage.setItem("workData",JSON.stringify(c))
    localStorage.setItem("edData",JSON.stringify(d));
    localStorage.setItem("achdData",JSON.stringify(e));
  return (
    <>
    <Header></Header>
    <hr />
    <User/>
    <NestHeader/>
    <Routes>
      <Route path='/' element={<EduComp/>}></Route>
      <Route path='/work' element={<WorkComp/>}></Route>
      <Route path='/achieve' element={<AchieveComp/>}></Route>
    </Routes>
    </>
  );
}

export default App;
