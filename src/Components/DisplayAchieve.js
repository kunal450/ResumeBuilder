import React,{useState} from 'react';
import CaretRightFilled from './images/CaretRightFilled.svg';
import CaretDownFilled from './images/CaretDownFilled.svg';
import EditWork from './EditWork';
import EditAchievement from './EditAchievement';

function DisplayAchieve(props) {
    var flag=false;
    const [show,setShow]=useState(false);
    const [eshow,setEshow]=useState(false);
    const val={
        company:props.company
    }
    function showHide(v){
        setEshow(v);
      }
      
    function deleteData(){
        var w=[];
      w=JSON.parse(localStorage.getItem("achdData"));
        var newData=[];
        
        for(let i=0;i<w.length;i++){
            if(i==props.index)continue;
            newData.push(w[i]);
        }
        localStorage.setItem("achdData",JSON.stringify(newData));
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
            {props.date}
        </div>
    </div>
    {
        show? <>
        <div className='pl-6 mt-2'>
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
        eshow?<EditAchievement cmp={showHide} index={props.index}/>: null
    }
    </>

  )
}

export default DisplayAchieve