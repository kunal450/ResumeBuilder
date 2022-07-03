import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import WorkExperience from './WorkExperience';
import Display from './Display';
import DisplayWork from './DisplayWork';
var x=[];
function WorkComp() {
  
  const [workComp,setWorkComp]=useState(false);
  const [change,setChange]=useState(1);
  function showHide(v){
    setWorkComp(v);
  }
  function rerender(a){
    setChange(a)
  }
  var data=[];
  data=JSON.parse(localStorage.getItem("workData"));
  const navigate =useNavigate();
  return (
    <>
    <div className='container mx-auto mt-10'>
    <button 
    className='text-center w-8/12 mx-auto block font-semibold rounded-md p-2' 
    id='addNew' 
    onClick={()=>setWorkComp(true)}>
    Add New</button>
   </div>

   {
    workComp?<WorkExperience cmp={showHide}/>: null
    }
    {
     
     data.map((i,index)=>{
       if(index==0) return null;
       return <>
        <DisplayWork description={i.description} title={i.company} st={i.start_date} end={i.end_date} quality={i.role} index={index} change={rerender}/>
        </>
     }
     
     )
     
    
     }
   
    </>
  )
}

export default WorkComp