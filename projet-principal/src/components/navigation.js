import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoA from "../images/Angular_logo.png";
import LogoR from "../images/React_logo.png";

const navigation = () => {
    return (
        <div className='navigation flex place-content-evenly items-center'>
            <div className='flex items-center'>
            {<img src={LogoA} className='w-12'/>}
            <NavLink to="/" className='bg-angular rounded-lg px-3 border-2 border-black shadow-ombre' >
                Angular
            </NavLink>
            </div>
            <div className='flex items-center'>
            {<img src={LogoR} className='w-12'/>}
            <NavLink to="/about" className='bg-react rounded-lg px-3 border-2 border-black shadow-ombre' >
                React
            </NavLink>
            </div>
            <NavLink to="/conclusion" className='bg-conclusion rounded-lg px-3 text-white border-2 border-white shadow-ombre'>
                Conclusion
            </NavLink>
        </div>
    );
};

export default navigation;