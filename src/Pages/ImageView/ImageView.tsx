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
        <div id={id}>
            <div className="flex flex-row-reverse py-8">
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
            <div className="max-h-[80%] flex flex-col lg:flex-row">
                <div className="lg:w-2/3 flex justify-center">
                    <Link
                        to={`../${prev}`}
                        relative="path"
                        replace
                        className={"flex flex-col justify-center w-fit p-5 select-none text-black"}
                    >←</Link>
                    <div className="w-4/5 flex justify-center max-w-[600px] h-[600px]">
                        <img className="object-scale-down" src={image.image} alt={image.title}></img>
                    </div>
                    <Link
                        to={`../${next}`}
                        relative="path"
                        replace
                        className={"flex flex-col justify-center w-fit p-5 select-none text-black"}
                    >→</Link>
                </div>
                <div className="lg:w-1/3 px-20 lg:ps-0 lg:pe-5">
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
    );
}
