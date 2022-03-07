import React from 'react';
import LogoA from "../images/Angular_logo.png";
import Misko from "../images/Misko-Hevery.jpg";

const Histoire = () => {
    return (
        <div class="m-5 flex items-center bg-cadre p-5 rounded-xl border-black shadow-ombre2">
            <div class="flex-none">
                <h1 class="text-center mb-2">Misko Hevery</h1>
                {<img src={Misko} class="h-56 rounded-lg"></img>}
                <p class="text-center bg-angular rounded-lg mt-0.5">En savoir plus</p>
            </div>
            
            <h1 class="flex-auto mx-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate animi vel magnam voluptatum nulla alias odit maiores facilis, excepturi ipsam eligendi beatae obcaecati quod, debitis esse dolore quibusdam assumenda! Amet?</h1>
            
            <div class="flex-none">
                {<img src={LogoA} className='h-40 '/>}
            </div>
            

        </div>
    );
};

export default Histoire;