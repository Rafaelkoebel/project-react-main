import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoA from "../images/Angular_logo.png";
import LogoR from "../images/React_logo.png";

const navigation = () => {
    return (
        <div className='navigation flex place-content-evenly items-center'>
            <div className='flex items-center'>
            {<img src={LogoA} className='w-12'/>}
            <NavLink to="/" className='bg-red-700 rounded-lg px-3 ' >
                Angular
            </NavLink>
            </div>
            <div className='flex items-center'>
            {<img src={LogoR} className='w-12'/>}
            <NavLink to="/react" className='bg-sky-500 rounded-lg px-3' >
                React
            </NavLink>
            </div>
            <NavLink to="/conclusion" className='bg-cyan-900 rounded-lg px-3 text-white'>
                Conclusion
            </NavLink>
        </div>
    );
};

export default navigation;