import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './views/Login';
import Homepage from './views/Homepage';
import Header from './views/Header';
import AdminPage from './views/AdminPage';

export default function App() {

  return (
      <BrowserRouter>
      <Header />
        <Routes>
          <Route index element={<Login />} />
          <Route path='/home' element={<Homepage />}/>
          <Route path='/tours' element={<AdminPage type="tour" />}></Route>
          <Route path='/stands' element={<AdminPage type="stand" />}></Route>
          <Route path='/points' element={<AdminPage type="point" />}></Route>
        </Routes>
      </BrowserRouter>
  );
}
