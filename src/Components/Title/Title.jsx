import React from 'react';
import { Link } from 'react-router-dom';


function Title() {
  return (
    <Link to='/'>
    <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-4 rounded-lg shadow-lg">
      <div className="text-green-100 text-3xl font-bold text-center tracking-wide">
        myGallery
      </div>
      </div>
    </Link>
  );
}

export default Title;
