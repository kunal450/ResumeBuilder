import React, { useEffect, useRef, useState } from 'react'
import { renderMatches } from 'react-router-dom';
import "../App.css"
import upload from './images/Upload.svg'
import NestHeader from './NestHeader'
function User() {
        let fileRef=useRef();
        const [image,setImage]=useState();
        const [preview,setPreview]=useState("");
        const [show,setShow]=useState(false);
        const [userData,setUserData]=useState({
                name:"",
                email:"",
                description:""
        })

        useEffect(()=>{
              if(image){
                const reader=new FileReader();
                reader.onloadend = () => {
                        setPreview(reader.result);
                };
                reader.readAsDataURL(image);
            }else {
                setPreview(null);
            }
        },[image])
        function inputFile(){
                fileRef.current.click();
        }
       
  return (
   <>
   <div className='container mx-auto'>
   <div className="grid grid-row-2 md:grid-cols-4  md:pl-20 lg:pl-24 pt-4 mt-2 gap-2">
   <div className=' h-32 w-32 mx-auto md:h-40 md:w-40 lg:h-48 lg:w-48 flex justify-center items-center ' id='usrImage'>
            {
              preview? <><img src={preview}  style={{objectFit:"contain", maxWidth:"100%", maxHeight:"100%", borderRadius:"50%"}} alt=" upload" className='inline' onClick={()=>setImage(null)}/></>
              :
              <button onClick={inputFile} className=' sm:w-30  md:w-44 block' id='usrImageUpload' >
                <span><img src={upload} alt=" upload" className='inline'/></span>
                Upload Photo
            </button>
                }
   </div>
         <input type="file" 
                accept='image/*'
                onChange={(e)=>{
                const file =e.target.files[0];
                if(file) setImage(file);
                else setImage(null); }} 
                ref={fileRef} className=' hidden p-20' id='getFile'/>
   <div className='md:col-span-3'>
      
      {  show? <>
           <div>
                <div className='font-bold text-lg mb-2'>{userData.name}</div>
                <div className='font-semibold mb-2' style={{color: "#717171"}}>{userData.email}</div>
                <div className='mb-4 text-sm font-semibold'>{userData.description}</div>
                <div><button className='text-sm w-16 text-semibold rounded-md'  style={{color: "#717171",border: "1px solid #EBEBEB"}} onClick={()=>setShow(false)}>Edit</button></div>
           </div>
        </>
        :
           <> <div className='grid md:grid-cols-2 gap-4 px-8 md:px-0'>
                <div className='grid grid-row-2 sm:gap-4 md:gap-8'> 
                        <div> 
                            <label htmlFor="Name" className='block'>Name</label>
                            <input type="text" name='Name' value={userData.name} className='usrInput border-black border-[1px] w-full md:w-9/12 ' onChange={(e)=>{setUserData({...userData,name:e.target.value})}}/>    
                        </div>
                        <div>
                        <label htmlFor="Email" className='block'>Email</label>
                        <input type="text" name='Email' value={userData.email} className='usrInput border-black border-[0.5px] w-full md:w-9/12 ' onChange={(e)=>{setUserData({...userData,email:e.target.value})}}/> 
                        </div>
                </div>
                <div>
                        <label htmlFor="Bio" className='block'>Short Bio</label>
                        <textarea type="text" name='Bio' value={userData.description} className='usrInput border-black border-[1px] w-full md:w-9/12 row-span-2' rows="5" cols="50" onChange={(e)=>{setUserData({...userData,description:e.target.value})}}></textarea> 
                </div>
        </div>
        <button id='personalInfoSave' className='rounded-md w-full md:w-16 py-1 ' onClick={()=>{setShow(true)}}>Save</button>
        </>}

   </div>
   </div>
   </div>
   </>
  )
}

export default User