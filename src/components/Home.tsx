import React, { useState, useEffect, lazy, Suspense } from "react";
import { Link, Routes, Route, useNavigate, redirect, useLocation } from 'react-router-dom'
import Axios from "axios"
import '../home.scss';

// import ErrorBoundary from '../ErrorBoundary';




// Import the lazy components
const Search = lazy(() => import('../containers/Search/Search'));
const Form = lazy(() => import('../containers/Form/Form'));

// const ImageContainerLazy = lazy(() => import('./ImageContainer'));

export default function HomePage() {

  
  useEffect(() => {
    document.title = "Book Us - Thrillers travels"
  }, [])


  return (
    <div>
      <Suspense fallback={

        <div>
    </div>
    }>
      <div className="home-div">

      <Form />
      <Search />
      </div>

      </Suspense>
    </div>

  );
}


