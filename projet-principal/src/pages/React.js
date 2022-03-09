import React from 'react';
import Navigation from '../components/navigation';
/* import { useNavigate} from "react-router-dom"*/
import Avantages2 from '../components/Avantages2'
import Histoire2 from '../components/Histoire2'
import Societe2 from '../components/Societe2'
import "../css/style.css"


function Home() {
/*   let navigate = useNavigate();
 */  return (
    <div className='test'>
      <Navigation /> 
        <h1 class="text-center font-bold text-6xl underline mt-12 mb-20">React</h1>
        <h2 class="text-center text-4xl">Comment est né React:</h2>
        <Histoire2 />
        <Avantages2/>
        <Societe2 />
        {/* <button onClick={() => {
            navigate("/about");
    }}
    >
        
    change to about page</button> */}    
    </div>
  )
}

export default Home

