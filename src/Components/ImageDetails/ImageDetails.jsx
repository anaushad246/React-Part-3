import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ImageDetails() {
    const { id } = useParams();
    const [photo, setPhoto] = useState({});
    

    const fetchPhoto = async () => {
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
         const responseData = response.data;
            setPhoto(responseData.photo);
    };

    useEffect(() => {
        fetchPhoto();
    }, [id]);

    return (
        <div className=' lg:w-4/5 border-4 bg-blue-900 m-auto mt-8 flex flex-row '>
            
            
                <img src={photo.url} alt={photo.title} 
                className='w-48 m-8 rounded shadow-xl shadow-cyan-500/50'/>
                <div className='m-8 p-4 mx-0 text-center'>
                    <h1 className='font-bold text-gray-300'>{photo.title}</h1>
                    <p className='text-gray-500'>{photo.description}</p>
                </div>
            
               
            
        </div>
    );
}

export default ImageDetails;
