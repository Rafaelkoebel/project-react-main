import React from 'react';

const Avantages = () => {
    return (
        <div className='Avantages'>
            <h2 className=' text-center text-4xl mb-16'>Avantages et inconvénient</h2>
            <div class="grid grid-cols-6 grid-rows-7 gap-4 flex	justify-center ">
                
                <div class="col-start-3 col-end-5 row-start-1 mb-3 flex justify-center  ">
                   <p className=' text-2xl bg-green p-0.5 rounded-tl-lg rounded-lg flex justify-center  min-w-[180px] pb-2'> Avantages</p>
                </div>
                <div class="col-start-2 col-end-4 row-start-4 flex justify-end mr-4	">
                    <p className='w-2/3 bg-white border-solid border-[3px] border-green p-0.5 rounded-tl-xl rounded-br-xl text-center min-w-[200px]'> Conçu par Google qui s’occupe du suivi et des mises à jour.</p>
                </div>
                <div class="col-end-6 col-span-2 row-start-5 row-span-1 flex justify-start ml-4">
                    <p className='w-2/3 bg-white border-solid border-[3px] border-green p-0.5 rounded-tl-xl rounded-br-xl text-center min-w-[200px]'>  TypeScript est plus sécurisé et plus lisible que JavaScript</p>
                </div>
                <div class="col-start-2 col-end-4 row-start-6 flex justify-end mr-4	">
                    <p className='w-2/3 bg-white border-solid border-[3px] border-green p-0.5 rounded-tl-xl rounded-br-xl text-center min-w-[200px]'> Excellente animation graphique</p>
                </div>
                <div class="col-end-6 col-span-2 row-start-7 flex justify-start ml-4">
                    <p className='w-2/3 bg-white border-solid border-[3px] border-green p-0.5 rounded-tl-xl rounded-br-xl text-center min-w-[200px]'> Open source </p>
                </div>
            </div>


            <div class="grid grid-cols-6 grid-rows-7 gap-4 flex	justify-center  mt-24 ">
                
                <div class="col-start-3 col-end-5 row-start-1 mb-3 flex justify-center ">
                   <p className='bg-angular p-0.5 text-white rounded-tl-lg rounded-lg flex justify-center items-center min-w-[180px] max-h-[50px] text-2xl pb-2'> inconvénient</p>
                </div>
                <div class="col-start-2 col-end-4 row-start-4 flex justify-end mr-4	">
                    <p className='w-2/3 bg-white border-solid border-[3px] border-angular p-0.5 rounded-tl-lg rounded-br-lg text-center min-w-[200px]'> Conçu par Google qui s’occupe du suivi et des mises à jour.</p>
                </div>
                <div class="col-end-6 col-span-2 row-start-5 row-span-1 flex justify-start ml-[3px]">
                    <p className='w-2/3 bg-white border-solid border-[3px] border-angular p-0.5 rounded-tl-lg rounded-br-lg text-center min-w-[200px]'>  TypeScript est plus sécurisé et plus lisible que JavaScript</p>
                </div>
            </div>    
        </div>
    );
};

export default Avantages;