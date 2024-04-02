import React from "react"
import { Image } from "../../Models/Image"

export default function CarouselCardView(props: { image: Image }) {    
    return (
        <div className="flex justify-center overflow-auto">
            <div className="w-full flex flex-col lg:landscape:flex-row">
                <div>
                    <img
                        alt={props.image.title}
                        src={props.image.image}
                        className="w-full sm:max-w-[600px] sm:max-h-[600px] object-scale-down"
                    />
                </div>
                <div className="h-full sm:w-[400px] m-0 xl:ml-20 p-5 xl:ps-0 xl:pe-5">
                    <h1 className="text-4xl font-thin">{props.image.title}</h1>
                    <div className="font-light">
                        <p className="mt-10">{props.image.description}</p>
                        <p className="mt-10">{props.image.medium ? "Medium: " + props.image.medium : undefined}</p>
                        <p className="mt-1">{props.image.image_size ? "Image Size: " + props.image.image_size : undefined}</p>
                        <p className="mt-1">{props.image.frame_size ? "Frame Size: " + props.image.frame_size : undefined}</p>
                        <p className="mt-10">{props.image.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
