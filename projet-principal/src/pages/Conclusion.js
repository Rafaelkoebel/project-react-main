import React from 'react';
import Conclusion1 from '../components/Conclusion1';
import Navigation from '../components/navigation';
import "../css/style.css"

function Home() {
    /*   let navigate = useNavigate();
     */  return (
        <div className='test2'>
          <Navigation /> 

          <h1 class="text-center font-bold text-6xl underline mt-12 mb-20">Angular vs React : lequel choisir ?</h1>
          

         <Conclusion1 />

          <h2 class="text-center font-bold text-4xl underline mt-12 mb-20">Conclusion</h2>

          <p class="mx-32 text-2xl">
            Étant donné le nombre de frameworks parmi lesquels choisir, chacun avec ses propres particularités, choisir le bon framework peut devenir une mission difficile.
            <br/>
            Nous avons ressenti cela avant lorsque nous avons décidé de créer l'application dans Vue.js d' abord et maintenant lorsque nous envisageons Angular.
            <br/>

            Lorsque nous sommes entre Angular ou React, je pense que cela se résume principalement à des préférences personnelles, car ils résolvent les mêmes problèmes mais avec des implémentations différentes.
            <br/>

            Cependant, dans le processus de prise de décision, il est important de considérer que React a une courbe d'apprentissage plus facile , ce qui conduit à un développement plus rapide , tandis qu'Angular a plus de fonctionnalités intégrées .
            <br/>

            Les deux technologies sont très puissantes , une nette amélioration depuis les premiers jours de la programmation Web qui améliore, facilite et accélère le développement.
            </p>
        </div>
      )
    }
    
    export default Home