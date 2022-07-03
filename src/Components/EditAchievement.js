import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

var achieveArray=[];

function EditAchievement(props) {

    achieveArray=JSON.parse(localStorage.getItem("achdData"));

  const [achieveData,setachieveData]=useState({
    title:achieveArray[props.index].title,
    date:achieveArray[props.index].date,
    description:achieveArray[props.index].description
  });
    const navigate=useNavigate();
    function save(){
        
       
       achieveArray[props.index]=achieveData;
       localStorage.setItem("achdData", JSON.stringify(achieveArray)); 
    //    console.log(achieveArray)
        props.cmp(false);
    }

    function cancel(){
        
        props.cmp(false);
    }
  return (
   <>
   <div className='fixed  backdrop-blur-sm inset-0 bg-opacity-50 bg-black '>
    <div className="workExperienceModal md:w-[33%] lg:w-[32%] xl:w-[33%] mx-auto p-12 container bg-white rounded-md mt-8">
        <h3 className='font-extrabold'>Edit Achievement</h3>
        <div>
            <label htmlFor='' className='block text-xs font-bold '>Title</label>
            <input type="text" className='rounded-md workExperienceText w-full' value={achieveData.title} onChange={e=>setachieveData({...achieveData, title:e.target.value})}/>
        </div>
        <div className='grid grid-cols-1 gap-4'>
        <div className="startDate">
            <label htmlFor="" className='block text-xs font-bold'>Date</label>
            <input type="text" className='workExperienceText w-full' value={achieveData.date} onChange={e=>setachieveData({...achieveData, date:e.target.value})} />
        </div>
        </div>
        <div>
        <label htmlFor='' className='block text-xs font-bold'>Description</label>
        <textarea name="" id="" cols="50" rows="10" className='rounded-md workExperienceText w-full' value={achieveData.description} onChange={e=>setachieveData({...achieveData, description:e.target.value})}></textarea>
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

export default EditAchievement