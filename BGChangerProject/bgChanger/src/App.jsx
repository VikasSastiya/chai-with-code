import './App.css';
import React,{useState} from 'react';

function App() {
  const [color,setColor]=useState('olive');

  return (
    <div> <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
    </div>
      </div>
      
  );
};

export default App;
