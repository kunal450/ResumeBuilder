import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

var workArray=[];

function EditWork(props) {
    workArray=JSON.parse(localStorage.getItem("workData"));
  const [workData,setWorkData]=useState({
    company:workArray[props.index].company,
    role:workArray[props.index].role,
    start_date:workArray[props.index].start_date,
    end_date:workArray[props.index].end_date,
    description:workArray[props.index].description
  });
    const navigate=useNavigate();
    function save(){ 
       workArray[props.index]=workData;
       localStorage.setItem("workData", JSON.stringify(workArray)); 
    //    console.log(workArray)
        props.cmp(false);
    }

    function cancel(){
        
        props.cmp(false);
    }
  return (
   <>
   <div className='fixed  backdrop-blur-sm inset-0 bg-opacity-50 bg-black '>
    <div className="workExperienceModal md:w-[33%] lg:w-[32%] xl:w-[33%] mx-auto p-12 container bg-white rounded-md mt-8">
        <h3 className='font-extrabold'>Edit work experience</h3>
        <div>
            <label htmlFor='' className='block text-xs font-bold '>Company</label>
            <input type="text" className='rounded-md workExperienceText w-full' value={workData.company} onChange={e=>setWorkData({...workData, company:e.target.value})}/>
        </div>
        <div>
        <label htmlFor='' className='block text-xs font-bold'>Role</label>
        <input type="text" className='rounded-md workExperienceText w-full' value={workData.role} onChange={e=>setWorkData({...workData, role:e.target.value})}/>
        </div>
        <div className='grid grid-cols-2 gap-4'>
        <div className="startDate">
            <label htmlFor="" className='block text-xs font-bold'>Start Date</label>
            <input type="text" className='workExperienceText w-full' value={workData.start_date} onChange={e=>setWorkData({...workData, start_date:e.target.value})} />
        </div>
        <div className="endDate">
            <label htmlFor="" className='block text-xs font-bold'>End Date</label>
            <input type="text" className='workExperienceText w-full' value={workData.end_date} onChange={e=>setWorkData({...workData, end_date:e.target.value})}/>
        </div>
        </div>
        <div>
        <label htmlFor='' className='block text-xs font-bold'>Description</label>
        <textarea name="" id="" cols="50" rows="10" className='rounded-md workExperienceText w-full' value={workData.description} onChange={e=>setWorkData({...workData, description:e.target.value})}></textarea>
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

export default EditWork