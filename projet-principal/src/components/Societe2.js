import React from 'react';
import Airbnb from'../images/airbnb.svg';
import Facebook from'../images/facebook-3.svg';
import Instagram from'../images/instagram-2-1.svg';
import Paypal from'../images/paypal-1.svg';
import Netflix from'../images/netflix-3.svg';

const Societe = () => {
    return (
        <>
        <h3 class="text-center my-8">Les sites qui ont adopté React :</h3>
        <div class='flex justify-around'>
            {<img src={Airbnb} className='w-16'/>}
            {<img src={Facebook} className='w-16'/>}
            {<img src={Instagram} className='w-12'/>}
            {<img src={Paypal} className='w-16'/>}
            {<img src={Netflix} className='w-12'/>}
        </div>
        </>
    );
};

export default Societe;