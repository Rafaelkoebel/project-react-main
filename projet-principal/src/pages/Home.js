import React from 'react';
import Navigation from '../components/navigation';
/* import { useNavigate} from "react-router-dom"*/
import Avantages from '../components/Avantages'
import Histoire from '../components/Histoire'
import Societe from '../components/Societe'
import "../css/style.css"


function Home() {
/*   let navigate = useNavigate();
 */  return (
    <div className='test'>
      <Navigation /> 
        <h1 class="text-center font-bold text-6xl underline mt-12 mb-20">Angular</h1>
        <h2 class="text-center text-4xl">Comment est né Angular:</h2>
        <Histoire />
        <Avantages/>
        <Societe />
        {/* <button onClick={() => {
            navigate("/about");
    }}
    >
        
    change to about page</button> */}    
    </div>
  )
}

export default Home

