import { useLoaderData } from "react-router-dom";
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Image } from "../../Models/Image";
import breakpoints from "../../Utilities/breakpoints.ts";
import Head from "../../Head/Head.tsx";
import NavBar from "../../Head/NavBar.tsx";
import Footer from "../../Footer.tsx"
import ImageTile from "./ImageTile.tsx";

export default function Gallery() {
    // Match the Tailwind breakpoints
    const isSm = useMediaQuery(breakpoints.sm)
    const isMd = useMediaQuery(breakpoints.md)

    const data = useLoaderData() as Array<Image>

    let numOfRows = isSm ? 1 : isMd ? 2 : 3;

    return (
        <>
            <Head />
            <NavBar />
            <div className="flex space-x-4">
                {[...Array(numOfRows)].map((_, rowNum) => {
                    return (
                        <div className="flex flex-col space-y-4 w-full xl:w-1/3 lg:w-1/2" key={rowNum}>
                            {data.filter((_, i) => {
                                return i % numOfRows === rowNum;
                            }).map((image, index) => {
                                const imageIndex = data.indexOf(image)
                                return <ImageTile image={image} index={imageIndex} key={index}/>
                            })}
                        </div>
                    )
                })}
            </div>
            <Footer />
        </>
    );
}
