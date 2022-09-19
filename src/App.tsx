import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './views/Login';
import Homepage from './views/Homepage';
import GuidedTour from './views/GuidedTour';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path='/' element={<Homepage />}/>
        <Route path='guided_tours/' element={<GuidedTour />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
