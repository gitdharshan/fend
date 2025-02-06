import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import MainNavigation from './components/Navigation/MainNavigation';
import Addreview from './components/movies/Addreview';
import Moviereview from './components/movies/Moviereview';
import Boxoffice from './components/movies/Boxoffice';
import Editreview from './components/movies/Editreview';
import Users from './components/pages/users/Details/Users';
const App = () => {
  return (
    <Router>
      {/* Main navigation bar */}
      <MainNavigation />

      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Catch-all route, redirecting to home if no route matches */}
        <Route path="*" element={<Navigate to="/" />} />
          <Route path="/user" element={<Users />}/>
          <Route path="/:uid/movies" element={<Moviereview />}/>
          <Route path="/add/new" element={<Addreview />}/>

          <Route path="/box" element={<Boxoffice />} />
          <Route path="/movies/:movieId" element={<Editreview />} />

      </Routes>
    </Router>
  );
};

export default App;
