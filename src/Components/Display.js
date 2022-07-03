import React,{useState} from 'react';
import CaretRightFilled from './images/CaretRightFilled.svg';
import CaretDownFilled from './images/CaretDownFilled.svg';
import EditEducation from './EditEducation';

function Display(props) {
    var flag=false;
    const [show,setShow]=useState(false);
    const [eshow,setEshow]=useState(false);
    
    function showHide(v){
        setEshow(v);
      }

      function deleteData(){
        var w=[];
      w=JSON.parse(localStorage.getItem("edData"));
        var newData=[];
        
        for(let i=0;i<w.length;i++){
            if(i==props.index)continue;
            newData.push(w[i]);
        }
        localStorage.setItem("edData",JSON.stringify(newData));
        props.change(6);
    }
  return (
    <>
    <div className='container mx-auto md:w-8/12 rounded-md mt-3' id='displayBlock'>
    <div className='flex justify-between' 
            onClick={()=>{
            flag=(!flag);
            setShow(flag)}}>
        <div className='flex font-bold'>
            <img src={show?CaretDownFilled:CaretRightFilled} alt="" />
            {props.title}
        </div>
        <div className='font-light'>
            {props.st}-{props.end}
        </div>
    </div>
    {
        show? <>
        <div className='pl-6 mt-2'>
        <div className=''>
            <label className='font-semibold text-sm block'>Degree</label>
            {props.quality}
        </div>
        <div className='text-sm mt-2'>
            <label htmlFor="" className=' font-semibold text-sm block'>Description</label>
            {props.description}
        </div>
        <div className='mt-2'> 
            <button className='text-sm w-16 text-semibold rounded-md' id='displayEdit' onClick={()=>{setEshow(true);}}>Edit</button>
            <button className='text-sm w-16 ml-2 text-bold rounded-md' id='displayDelete' onClick={deleteData}>Delete</button>    
        </div>
    </div>
        </>:
        null
    }
    </div>
    {
        eshow?<EditEducation cmp={showHide} index={props.index}/>: null
    }
    </>

  )
}

export default Display