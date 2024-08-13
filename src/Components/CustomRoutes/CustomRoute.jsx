import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Gallery from '../Gallery/Gallery';
import ImageDetails from '../ImageDetails/ImageDetails';

function CustomRoute() {
  return (
    
    <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/ImageDetails/:id" element={<ImageDetails />} />
    </Routes>
  );
}

export default CustomRoute;
