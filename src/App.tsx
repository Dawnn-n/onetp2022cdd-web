import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './views/Login';
import Homepage from './views/Homepage';
import Header from './views/Header';
import AdminPage from './views/AdminPage';

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
          <Route path='/tours' element={<AdminPage type="tour" toggleHeader={setHeader} />}></Route>
          <Route path='/stands' element={<AdminPage type="stand" toggleHeader={setHeader} />}></Route>
          <Route path='/points' element={<AdminPage type="point" toggleHeader={setHeader} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
