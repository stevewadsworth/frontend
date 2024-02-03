import { useNavigate, useLoaderData, useParams, Link } from "react-router-dom";
import { Image } from "../../Models/Image"
import React from "react";

export default function ImageView() {
    const navigate = useNavigate();

    const { id } = useParams()
    const realId = Number(id)

    const data = useLoaderData() as Array<Image>

    const numOfImages = data.length
    const image = data[realId]

    const prev = realId > 0 ? realId - 1 : numOfImages - 1
    const next = (realId < (numOfImages - 1)) ? realId + 1 : 0

    return (
        <div className="sm:flex sm:justify-center sm:p-5">
            <div>
                <div className="flex flex-row-reverse">
                    <button
                        type="button"
                        className="px-4 cursor-pointer"
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="w-full flex flex-col xl:flex-row">
                    <div className="flex justify-center">
                        <div className="relative w-screen h-screen-w max-w-[640px] max-h-[640px] sm:w-[640px] sm:h-[640px] sm:p-5 sm:shadow-lg">
                            <div className="absolute flex justify-center w-screen h-screen-w max-w-[600px] max-h-[600px]  sm:w-[600px] sm:h-[600px]">
                                <img id={id} className="w-screen sm:max-w-[600px] sm:max-h-[600px] object-scale-down" src={image.image} alt={image.title}></img>
                            </div>
                            <Link
                                to={`../${prev}`}
                                relative="path"
                                replace
                                className={"absolute left-0 h-full w-1/2 flex flex-col justify-center p-5 select-none text-black"}
                            >←</Link>
                            <Link
                                to={`../${next}`}
                                relative="path"
                                replace
                                className={"absolute right-0 h-full w-1/2 flex flex-col justify-center p-5 select-none text-black text-right"}
                            >→</Link>
                        </div>
                    </div>
                    <div className="sm:w-[400px] m-0 xl:ml-20 p-5 xl:ps-0 xl:pe-5">
                        <h1 className="text-4xl">{image.title}</h1>
                        <div className="">
                            <p className="mt-10">{image.description}</p>
                            <p className="mt-10">{image.medium ? "Medium: " + image.medium : undefined}</p>
                            <p className="mt-1">{image.image_size ? "Image Size: " + image.image_size : undefined}</p>
                            <p className="mt-1">{image.frame_size ? "Frame Size: " + image.frame_size : undefined}</p>
                            <p className="mt-10">{image.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}