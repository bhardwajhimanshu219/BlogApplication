import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Homepage from './components/Homepage';
import NavBar from './components/navbar';
import Blogs from './components/Blogs';

import { selectSignedIn } from './features/userSlice';
const App = () => {
  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="app">
      <NavBar />
      <Homepage />
      {isSignedIn && <Blogs />}
    </div>
  );
};
export default App;
