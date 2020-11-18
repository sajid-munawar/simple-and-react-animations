import React from 'react';
import useWebAnimations, { bounce } from "@wellyshen/use-web-animations";
import './App.css';
function App1() {
    const { ref, playState } = useWebAnimations({ ...bounce })
    
        return (<div>
        <div ref={ref} className="div">
        </div><br />
      
    </div>
    )
}
export default App1;
