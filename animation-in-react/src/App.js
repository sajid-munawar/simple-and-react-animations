import React, { useRef,useEffect } from 'react';
import './App.css';

function App() {
  const element = useRef(null);

  useEffect(() => {
    element.current.focus();
  }, [])

  return (
    <div >
      <input ref={element} type="text" />
      <input  type="text" />

    </div>
  );
}

export default App;
