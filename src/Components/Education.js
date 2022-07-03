import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import EduComp from './EduComp';

var educationArray=[];
function Education(props) {
    const [edData,setEdData]=useState({
        institute:"",
        degree:"",
        start_date:"",
        end_date:"",
        description:""
    })

    
    const navigate=useNavigate();
    function save(){
        if(JSON.parse(localStorage.getItem("edData"))!=null)
        educationArray=JSON.parse(localStorage.getItem("edData"));
        educationArray.push(edData);
        localStorage.setItem("edData",JSON.stringify(educationArray));
        console.log(educationArray)
        props.cmp(false);
    }

    function cancel(){
        props.cmp(false);
    }
  return (
    <>
    <div className='fixed  backdrop-blur-sm inset-0 bg-opacity-50 bg-black '>
    <div className="educationModal md:w-[33%] lg:w-[32%] xl:w-[33%] mx-auto p-12 container bg-white rounded-md mt-8">
        <h3 className='font-extrabold mb-3'>Add new education</h3>
        <div>
            <label htmlFor='' className='block text-xs font-bold'>Institute</label>
            <input type="text" className='rounded-md educationText w-full' onChange={(e)=>setEdData({...edData , institute:e.target.value})} />
        </div>
        <div>
        <label htmlFor='' className='block text-xs font-bold'>Degree</label>
        <input type="text" className='rounded-md educationText w-full' onChange={(e)=>setEdData({...edData , degree: e.target.value})} />
        </div>
        <div className='grid grid-cols-2 gap-4'>
        <div className="startDate">
            <label htmlFor="" className='block text-xs font-bold' >Start Date</label>
            <input type="text" className='educationText w-full' onChange={(e)=>setEdData({...edData , start_date:e.target.value})}/>
        </div>
        <div className="endDate">
            <label htmlFor="" className='block text-xs font-bold'>End Date</label>
            <input type="text" className='educationText w-full' onChange={(e)=>setEdData({...edData , end_date:e.target.value})}/>
        </div>
        </div>
        <div>
        <label htmlFor='' className='block text-xs font-bold'>Description</label>
        <textarea name="" id="" cols="50" rows="10" className='rounded-md educationText w-full' onChange={(e)=>setEdData({...edData , description:e.target.value})}></textarea>
        </div>
        <div>
            <button className='rounded-md w-16 text-white' id='saveButton' onClick={save}>Save</button>
            <button className='rounded-md ml-4 w-16' id='cancelButton' onClick={cancel}>Cancel</button>
        </div>
    </div>
    </div>
    </>
  )
}

export default Education