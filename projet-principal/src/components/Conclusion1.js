import React from 'react';
import "../css/style.css"

const Conclusion1 = () => {
    return (
    <p class="mx-32 text-2xl histoire">
            Sur la base de mes recherches et du projet développé, je peux affirmer que :  
            <br/>
            Angular vous permet de détecter les erreurs au moment de la compilation , car TypeScript est un langage typé statiquement, au lieu de l'exécution (comme en JavaScript).
            <br/>
            Les programmeurs issus de langages à typage statique ont tendance à préférer Angular comme framework , car TypeScript vous permet d'avoir des types explicites dans votre code.
            <br/>
            Angular garantit que les données sont toujours synchronisées à tous les niveaux , avec la liaison de données bidirectionnelle, qui contraste avec la liaison de données unidirectionnelle de React.
            <br/>
            React a une courbe d'apprentissage plus facile , donc le temps de montée en puissance est beaucoup plus court.
            <br/>
            React offre une meilleure solution de framework mobile multiplateforme que Angular.
            <br/>
            React vous permet d'avoir une opinion plus forte sur la façon dont le code doit être organisé.
            <br/>
            Pour ce projet spécifique, React était la meilleure option . Sa simplicité le rendait plus facile à apprendre, agréable à utiliser et facilitait la transition vers l'architecture à base de composants - pour les nouveaux venus comme moi, c'était une aide extrêmement précieuse. Cependant, pour les projets complexes et plus longs, Angular conviendra mieux car il vous permet d'avoir des types explicites et de détecter les erreurs au moment de la compilation.
            </p>
    )
};
export default Conclusion1;