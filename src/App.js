import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Mainpage from './components/Mainpage/main';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainpage/>}/>
      </Routes>
    </>
  );
}

export default App;
