import { Link, useLoaderData } from "react-router-dom";
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Image } from "../../Models/Image";

export default function Gallery() {
    // Match the Tailwind breakpoints
    const isSm = useMediaQuery({ query: '(max-width: 640px)' })
    const isMd = useMediaQuery({ query: '(max-width: 768px)' })
    // const isLg = useMediaQuery({ query: '(max-width: 1024px)' })
    // const isXl = useMediaQuery({ query: '(max-width: 1280px)' })
    // const is2xl = useMediaQuery({ query: '(max-width: 1536px)' })

    const data = useLoaderData() as Array<Image>

    let numOfRows = isSm ? 1 : isMd ? 2 : 3;

    return (
        <div className="flex space-x-4">
            {[...Array(numOfRows)].map((_, rowNum) => {
                return (
                    <div className="flex flex-col space-y-4 xl:w-1/3 lg:w-1/2" key={rowNum}>
                        {data.filter((_, i) => {
                            return i % numOfRows === rowNum;
                        }).map((image, index) => {
                            const imageIndex = data.indexOf(image)
                            return (
                                <Link to={"/image-view/" + imageIndex}
                                key={index}
                                >
                                    <img
                                        src={image["image"]}
                                        alt={image["title"]}
                                        className="hover:transition-all hover:scale-105"
                                    ></img>
                                </Link>);
                        })}
                    </div>
                )
            })}
        </div>
    );
}
