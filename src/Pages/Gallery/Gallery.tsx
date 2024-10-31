import { useLoaderData } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { Images } from "../../Models/Image";
import breakpoints from "../../Utilities/mediaBreakpoints.ts";
import Head from "../Fragments/Head/Head.tsx";
import NavBar from "../Fragments/Head/NavBar.tsx";
import Footer from "../Fragments/Footer/Footer.tsx"
import ImageTile from "./ImageTile.tsx";

export default function Gallery() {
    // Match the Tailwind breakpoints
    const isSm = useMediaQuery(breakpoints.sm)
    const isMd = useMediaQuery(breakpoints.md)

    const images = useLoaderData() as Images
    const data = images.Images

    const numOfRows = isSm ? 1 : isMd ? 2 : 3;

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
