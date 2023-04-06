// Styles
import './styles/main.css';
// Dependencies
import { Routes, Route } from "react-router-dom";
import React from 'react';
// Components
import Layout from './components/Layout/Layout'
// Pages
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from './pages/AboutPage';
import SingleLocationPage from "./pages/SingleLocationPage";
import { LocationsProvider } from './context/LocationsContext';

function App() {
  return (
    <React.Fragment>
      <LocationsProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/location/:locationId" element={<SingleLocationPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </LocationsProvider>
    </React.Fragment>
  );
}

export default App;
