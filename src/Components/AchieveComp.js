import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Achievement from './Achievement';
import DisplayAchieve from './DisplayAchieve'

function AchieveComp() {
  const [achComp,setAchComp]=useState(false);
  const [change,setChange]=useState(1);
  function showHide(v){
    setAchComp(v);
  }
  function rerender(a){
    setChange(a)
  }
  var data=JSON.parse(localStorage.getItem("achdData"));
  const navigate= useNavigate();
  return (
   <>
   <div className='container mx-auto mt-10'>
   <button 
    className='text-center w-8/12 mx-auto block font-semibold rounded-md p-2' 
    id='addNew' 
    onClick={()=>setAchComp(true)}>
    Add New</button>
   </div>
   {
    achComp?<Achievement cmp={showHide} /> :null
   }
   {
    data.map((i,index)=>{
    if(index==0) return null;
    return <>
    <DisplayAchieve description={i.description} title={i.title} date={i.date} index={index} change={rerender}/>
    </>
    }
    )
   }
   </>
  )
}

export default AchieveComp