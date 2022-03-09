import React, { useState } from 'react';
import LogoB from "../images/logo-react.png";
import Jordan from "../images/jordan.jpg";
import "../css/style.css"


const Histoire = () => {

    const [toggleState, setToggleSate] = useState(false);
    const toggleFonction = () => {
        console.log('toggleFonction');
        setToggleSate(!toggleState)
    }

    return (
        <div className=" histoire2 lg:flex-nowrap flex flex-wrap justify-center gap-4 items-center  rounded-xl m-5 p-5 backdrop-blur-lg ">
            <div className=" gap-1 flex flex-col lg:w-64 w-[95%] ">
                <h1 className="text-center ">Jordan Walke</h1>
                {<img src={Jordan} className="rounded-lg "></img>}


                {toggleState ?
                <div onClick={toggleFonction}>
                <p className="text-center bg-react rounded-lg cursor-pointer ">En savoir moins</p>
                 </div> :
                 <div onClick={toggleFonction}>
                <p className="text-center bg-react rounded-lg cursor-pointer ">En savoir plus</p>
                 </div> 
                }
                {toggleState && <p className='bg-react cursor-pointer	' onClick={toggleFonction}>
                React est créé par Jordan Walke, un ingénieur au sein de la société Facebook à la fin de l'année 2011.
                    </p>}
                
            </div>
            
            <p className="lg:flex-1 lg:mx-12">React (aussi appelé React.js ou ReactJS) est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page (ou portion) HTML à chaque changement d'état.
            React est une bibliothèque qui ne gère que l'interface de l'application, considéré comme la vue dans le modèle MVC. Elle peut ainsi être utilisée avec une autre bibliothèque ou un framework MVC comme AngularJS. La bibliothèque se démarque de ses concurrents par sa flexibilité et ses performances, en travaillant avec un DOM virtuel et en ne mettant à jour le rendu dans le navigateur qu'en cas de nécessité.</p>
            
            <div className="">
                {<img src={LogoB} className='h-40 '/>}
            </div>
            

        </div>
    );
};

export default Histoire;