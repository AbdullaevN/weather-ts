import React from 'react';
import { Route, Routes } from 'react-router';
import { Home } from './pages/Home/Home';
import { MonthStatics } from './pages/MonthStatics/MonthStatics';
import { Header } from './shared/Header/Header';
import { Popup } from './shared/Popup/Popup';
 
function App() {
  return (
    <div className='global-container'>
      {/* <Popup/> */}
    <div className="container">
      <Header/>
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/month-statistics' element={<MonthStatics/>}/>

      </Routes>
    </div>
    </div>
  );
}

export default App;
