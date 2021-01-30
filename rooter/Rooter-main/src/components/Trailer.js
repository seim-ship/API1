import React from 'react';
import {Link} from "react-router-dom";

const Trailer = () => {
    return (
        <div>
            
            
           <a href="https://watchlostonline.net/">
               <button>Watch it here</button>
           </a>
           
           
           <p>Lost is an American serial drama television series that predominantly followed the lives of the survivors of a plane crash on a mysterious tropical island.</p>
           <Link to={`/`}>Return to main Menue</Link>
        </div>
    )
}

export default Trailer
