import React from 'react';
/* import { useNavigate} from "react-router-dom"*/
import Avantages from '../components/Avantages'
import Histoire from '../components/Histoire'


function Home() {
/*   let navigate = useNavigate();
 */  return (
    <div>
        <h1 class="text-center font-bold text-6xl underline mt-12">Angular</h1>
        <h2 class="text-center text-4xl">Comment est né Angular:</h2>
        <Histoire />
        <Avantages/>
        {/* <button onClick={() => {
            navigate("/about");
    }}
    >
        
    change to about page</button> */}    
    </div>
  )
}

export default Home