import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import "../App.css"

function NestHeader() {
const navigate=useNavigate();
function eduOpen(){

}
var a=[];
a=JSON.parse(localStorage.getItem("edData"));
var b=[];
b=JSON.parse(localStorage.getItem("achdData"));
var c=[];
c=JSON.parse(localStorage.getItem("workData"));
const navLinkStyle=({isActive})=>{
  return {
    fontWeight: isActive? 'bold':'normal',
    textDecoration: isActive ?'underline': ''
  }
}
  return (
    <>
    <div className='container mx-auto'>
        <div className='mx-auto md:w-6/12 flex justify-around mt-16 home'>
                    <li><NavLink activeClassName="active-link" style={navLinkStyle} to="/">Education({a.length-1})</NavLink ></li>
                    <li><NavLink activeClassName="active-link"  style={navLinkStyle} to="/work">Work Experience({c.length-1})</NavLink ></li>
                    <li><NavLink activeClassName="active-link" style={navLinkStyle} to="/achieve">Achivements({b.length-1})</NavLink></li>
        </div>
    </div>
    </>
  )
}

export default NestHeader