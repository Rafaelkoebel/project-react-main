import React, { useState } from 'react';
import LogoA from "../images/Angular_logo.png";
import Misko from "../images/Misko-Hevery.jpg";
import "../css/style.css"


const Histoire = () => {

    const [toggleState, setToggleSate] = useState(false);
    const toggleFonction = () => {
        console.log('toggleFonction');
        setToggleSate(!toggleState)
    }

    return (
        <div className=" histoire lg:flex-nowrap flex flex-wrap justify-center gap-4 items-center  rounded-xl m-5 p-5 backdrop-blur-lg ">
            <div className=" gap-1 flex flex-col lg:w-64 w-[95%] ">
                <h1 className="text-center ">Misko Hevery</h1>
                {<img src={Misko} className="rounded-lg "></img>}


                {toggleState ?
                <div onClick={toggleFonction}>
                <p className="text-center bg-angular rounded-lg cursor-pointer ">En savoir moins</p>
                 </div> :
                 <div onClick={toggleFonction}>
                <p className="text-center bg-angular rounded-lg cursor-pointer ">En savoir plus</p>
                 </div> 
                }
                {toggleState && <p className='bg-angular cursor-pointer	' onClick={toggleFonction}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptates, facilis et quibusdam consequatur nostrum repudiandae? Neque porro corrupti voluptatibus fugiat, natus nesciunt, nemo inventore autem possimus nobis fugit illum.
                    </p>}
                
            </div>
            
            <p className="lg:flex-1 lg:mx-12">Angular (communément appelé "Angular 2+" ou "Angular v2 et plus")2,3 est un framework côté client, open source, basé sur TypeScript, et co-dirigé par l'équipe du projet « Angular » à Google et par une communauté de particuliers et de sociétés. Angular est une réécriture complète d'AngularJS, cadriciel construit par la même équipe. Il permet la création d’applications Web et plus particulièrement de ce qu’on appelle des « Single Page Applications » : des applications web accessibles via une page web unique qui permet de fluidifier l’expérience utilisateur et d’éviter les chargements de pages à chaque nouvelle action. Le Framework est basé sur une architecture du type MVC et permet donc de séparer les données, le visuel et les actions pour une meilleure gestion des responsabilités. Un type d’architecture qui a largement fait ses preuves et qui permet une forte maintenabilité et une amélioration du travail collaboratif.</p>
            
            <div className="">
                {<img src={LogoA} className='h-40 '/>}
            </div>
            

        </div>
    );
};

export default Histoire;