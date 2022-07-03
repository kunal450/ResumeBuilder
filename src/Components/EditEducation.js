import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

var edArray=[];

function EditEducation(props) {
    edArray=JSON.parse(localStorage.getItem("edData"));

  const [edData,setedData]=useState({
    institute:edArray[props.index].institute,
    degree:edArray[props.index].degree,
    start_date:edArray[props.index].start_date,
    end_date:edArray[props.index].end_date,
    description:edArray[props.index].description
  });
    const navigate=useNavigate();
    function save(){
        
       edArray[props.index]=edData;
       localStorage.setItem("edData", JSON.stringify(edArray)); 
    //    console.log(edArray)
        props.cmp(false);
    }

    function cancel(){
        
        props.cmp(false);
    }
  return (
   <>
   <div className='fixed  backdrop-blur-sm inset-0 bg-opacity-50 bg-black '>
    <div className="workExperienceModal md:w-[33%] lg:w-[32%] xl:w-[33%] mx-auto p-12 container bg-white rounded-md mt-8">
        <h3 className='font-extrabold'>Edit Education</h3>
        <div>
            <label htmlFor='' className='block text-xs font-bold '>Institute</label>
            <input type="text" className='rounded-md workExperienceText w-full' value={edData.institute} onChange={e=>setedData({...edData, institute:e.target.value})}/>
        </div>
        <div>
        <label htmlFor='' className='block text-xs font-bold'>Degree</label>
        <input type="text" className='rounded-md workExperienceText w-full'  value={edData.degree} onChange={e=>setedData({...edData, degree:e.target.value})}/>
        </div>
        <div className='grid grid-cols-2 gap-4'>
        <div className="startDate">
            <label htmlFor="" className='block text-xs font-bold'>Start Date</label>
            <input type="text" className='workExperienceText w-full' value={edData.start_date} onChange={e=>setedData({...edData, start_date:e.target.value})} />
        </div>
        <div className="endDate">
            <label htmlFor="" className='block text-xs font-bold'>End Date</label>
            <input type="text" className='workExperienceText w-full' value={edData.end_date} onChange={e=>setedData({...edData, end_date:e.target.value})}/>
        </div>
        </div>
        <div>
        <label htmlFor='' className='block text-xs font-bold'>Description</label>
        <textarea name="" id="" cols="50" rows="10" className='rounded-md workExperienceText w-full' value={edData.description} onChange={e=>setedData({...edData, description:e.target.value})}></textarea>
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

export default EditEducation