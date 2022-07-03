import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';


var achArray=[];
function Achievement(props){
    const [achData,setachData]=useState({
        title:"",
        date:"",
        description:""
      });

  const navigate = useNavigate();
  function save(){
    if(JSON.parse(localStorage.getItem("achdData"))!=null)
        achArray=JSON.parse(localStorage.getItem("achdData"));
        achArray.push(achData);
        localStorage.setItem("achdData",JSON.stringify(achArray));
        // console.log(workArray)
    props.cmp(false);
}

function cancel(){
    props.cmp(false);
}
  return (
    <>
    
    <div className='fixed  backdrop-blur-sm inset-0 bg-opacity-50 bg-black '>
    <div className="educationModal md:w-[33%] lg:w-[32%] xl:w-[33%] mx-auto p-12 container bg-white rounded-md mt-8">
        <h3 className='font-extrabold mb-3'>Add new Achievement</h3>
        <div>
            <label htmlFor='' className='block text-xs font-bold ' >Title</label>
            <input type="text" className='rounded-md educationText w-full' onChange={(e)=>setachData({...achData, title:e.target.value})} />
        </div>
        <div className='grid grid-cols-1 gap-4'>
        <div className="startDate">
            <label htmlFor="" className='block text-xs font-bold'>Date</label>
            <input type="text" className='educationText w-full' onChange={(e)=>setachData({...achData, date:e.target.value})} />
        </div>
        </div>
        <div>
        <label htmlFor='' className='block text-xs font-bold' >Description</label>
        <textarea name="" id="" cols="50" rows="10" className='rounded-md educationText w-full' onChange={(e)=>setachData({...achData, description:e.target.value})}></textarea>
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

export default Achievement