import GalleryViewModel from "./GalleryViewModel"
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

export default function Gallery() {


    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await GalleryViewModel()
                console.dir(data)
                setData(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    let numOfRows = 3;

    return (
        <div className="flex space-x-4">
            {[...Array(numOfRows)].map((_, rowNum) => {
                return (
                    <div className="flex flex-col space-y-4" key={rowNum}>
                        {data.filter((_, i) => {
                            return (i + rowNum) % numOfRows === 0;
                        }).map((image, index) => {
                            const imageIndex = data.indexOf(image)
                            return (
                                <Link to={"/image-view/" + imageIndex}
                                key={index}
                                >
                                    <img
                                        src={image["image"]}
                                        alt={image["title"]}
                                        className="hover:opacity-50 transition-all hover:scale-105"
                                    ></img>
                                </Link>);
                        })}
                    </div>
                )
            })}
        </div>
    );
}
