import React from 'react'
import "./styles/Navigation.style.css"
import { NavLink } from 'react-router-dom';
const Navigation = () => {
  // const setActive = ({ isActive }) =>
  //   isActive ? "li-effect" : "li-effect";
  return (
    <div className='Nav'>
   <div className="image">
            <img src=''/>
        </div>
        <div className='navlinks'>
            <ul>
                <div className='li-effect'>
                <NavLink className={"uscore"} to="/">Home</NavLink>
                </div>
                {/* <div className='li-effect'>
                <li>Events</li>
                <span></span>
                </div> */}
                <div className='li-effect'>
                <NavLink className={"uscore"} to="/esummit">ESummit'23</NavLink>
                </div>
                <div className='li-effect'>
                <NavLink className={"uscore"} to="/archives">Archives</NavLink>
                </div>
               <div className='li-effect'>
               <NavLink className={"uscore"} to="/ourteam">Battalion</NavLink>
               </div>
                <div className='li-effect'>
                <NavLink className={"uscore"} to="/contact">Contact</NavLink>
                </div>
                <div className={"button"}> 
                  <NavLink className={"uscore-b"} to={"https://linktr.ee/ecell.medicaps"} >Register</NavLink>
                </div>
            </ul>
        </div>
    </div>
       
    
  );
}

export default Navigation
