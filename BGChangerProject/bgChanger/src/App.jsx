import './App.css';
import React,{useState} from 'react';

function App() {
  const [color,setColor]=useState('olive');

  return (
    <div className="w-100"> <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
    </div>
      </div>
      
  );
};

export default App;
