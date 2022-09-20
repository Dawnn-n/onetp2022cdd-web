import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './views/Login';
import Homepage from './views/Homepage';
import GuidedTourAdmin from './views/GuidedTourAdmin';
import StandAdmin from './views/StandAdmin';
import SmartPointAdmin from './views/SmartPointAdmin';
import Header from './views/Header';

export default function App() {
  const [slimHeader, setSlimHeader] = useState(true)
  const setHeader = (state : boolean) => {
    setSlimHeader(state)
  }
  useEffect(() => {
    console.log(slimHeader)
  }, [slimHeader])

  return (
    <>
      {slimHeader? <Header /> : <></>}
      <BrowserRouter>
        <Routes>
          <Route index element={<Login toggleHeader={setHeader} />} />
          <Route path='/home' element={<Homepage toggleHeader={setHeader} />}/>
          <Route path='/tours' element={<GuidedTourAdmin toggleHeader={setHeader} />}></Route>
          <Route path='/stands' element={<StandAdmin toggleHeader={setHeader} />}></Route>
          <Route path='/points' element={<SmartPointAdmin toggleHeader={setHeader} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
