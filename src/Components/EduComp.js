import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Education from './Education';
import Display from './Display';

function EduComp() {
  const [edCOmp,setEdComp]=useState(false);
  const [change,setChange]=useState(1);
  function showHide(v){
    setEdComp(v);
  }
  function rerender(a){
    setChange(a)
  }
   var data=JSON.parse(localStorage.getItem("edData"));
  const navigate= useNavigate();
  return (
    <>
   <div className='container mx-auto mt-10'>
    <button 
    className='text-center w-8/12 mx-auto block font-semibold rounded-md p-2' 
    id='addNew' 
    onClick={()=>{
       setEdComp(true);
    }}>
    Add New</button>
   </div>
   {
    edCOmp?<Education cmp={showHide}/>: null
    }
    {
    data.map((i,index)=>{
     if(index==0) return null;
     return <>
    <Display description={i.description} title={i.institute} st={i.start_date} end={i.end_date} quality={i.degree} index={index} change={rerender}/>
    </>
    }
    )
   }
   

   </>
  )
}

export default EduComp