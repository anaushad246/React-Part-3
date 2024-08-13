import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Gallery() {
    const [photos, setPhotos] = useState([]);

    async function DownloadImages() {
        try {
            const response = await axios.get("https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=20");
            const responseData = response.data;
            const dataPhotos = responseData.photos;
            

            // Map through dataPhotos to get an array of objects with id and url
            const photosWithIdAndUrl = dataPhotos.map(photo => ({
                id: photo.id,
                url: photo.url,
            }));
            console.log(typeof photosWithIdAndUrl);
            
            setPhotos(photosWithIdAndUrl);
        } catch (error) {
            console.error('Error fetching photos:', error);
        }
    }

    useEffect(() => {
        DownloadImages();
    }, []);

    return (
        <>
            
            
            <div className="flex justify-evenly flex-wrap p-4 ">
            {photos.map(photo => (
                <Link to={`/ImageDetails/${photo.id}`} key={photo.id} className="mb-4">
                    <div className="relative group">
                        <img
                            className="h-auto w-40 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                            src={photo.url}
                            alt={`Photo ${photo.id}`}
                        />
                        <p className="absolute bottom-2 left-2 bg-gray-800 bg-opacity-70 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Photo {photo.id}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
        </>
    );
}

export default Gallery;
