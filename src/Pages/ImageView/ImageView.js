import { useLoaderData, Link } from "react-router-dom";
import GalleryViewModel from "../Gallery/GalleryViewModel";
import { useState } from "react";

export async function loader({ params }){
    return params.index
}

export default function ImageView(){

    const [imageIndex, setImageIndex] = useState(Number(useLoaderData()));

    const imagejson = GalleryViewModel()["Images"];
    const numOfImages = imagejson.length
    

    const backImage = () => {
        setImageIndex((oldIndex) => {return oldIndex-1})
    }
    const forwardImage = () => {
        setImageIndex((oldIndex) => {return oldIndex+1})
    }

    console.log(imageIndex)
    console.log(imagejson)

    const image = imagejson[imageIndex];
    

    return (
        <>
            <div className="py-8">
                <Link to="/gallery">
                    <div className="flex flex-row-reverse px-4">X</div>
                </Link>
            </div>
            <div className="flex max-h-[80%]">
                <div className="w-2/3 h-full flex justify-evenly">
                    <div onClick={imageIndex > 0 ? backImage : null}  
                        className={"flex flex-col justify-center w-5 cursor-pointer select-none"+(imageIndex > 0 ? " text-black" : " text-gray-200")}
                        > ← </div>
                    <div > 
                        <img  src={"../TestImages/"+image["image"]} alt={image["title"]}></img>
                    </div>
                    <div onClick={imageIndex < numOfImages-1 ? forwardImage : null} 
                        className={"flex flex-col justify-center w-5 cursor-pointer select-none"+(imageIndex < numOfImages-1 ? " text-black" : " text-gray-200")}
                        > → </div>
                </div>
                <div>
                    <h1 className=" text-5xl">{image["title"]}</h1>
                    <div className=" mx-5 my-10">
                        <p className="my-1">{image["medium"]}</p>
                        <p className="my-1">{image["year"]}</p>
                    </div>
                </div>
            </div>
        </>
    );
}