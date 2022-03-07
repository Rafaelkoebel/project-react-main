import React from 'react';
import Google from'../images/google.svg';
import Lego from'../images/lego.svg';
import Ups from'../images/ups.svg';
import Forbes from'../images/forbes.svg';
import Rockstar from'../images/rockstar.svg';

const Societe = () => {
    return (
        <>
        <h3 class="text-center my-8">Les sites qui ont adopté Angular :</h3>
        <div class='flex justify-around'>
            {<img src={Google} className='w-16'/>}
            {<img src={Lego} className='w-16'/>}
            {<img src={Ups} className='w-12'/>}
            {<img src={Forbes} className='w-16'/>}
            {<img src={Rockstar} className='w-12'/>}
        </div>
        </>
    );
};

export default Societe;