import React, { useRef } from "react"
import { useEffect } from "react"
import { useLoaderData, useNavigate, useParams } from "react-router-dom"
import { Image } from "../../Models/Image.ts"
import SlCarousel from '@shoelace-style/shoelace/dist/react/carousel'
import SlCarouselItem from '@shoelace-style/shoelace/dist/react/carousel-item'
import SlCarouselType from "@shoelace-style/shoelace/dist/components/carousel/carousel.component"
import CarouselCardView from "./CarouselCard.tsx"
import { useMediaQuery } from "react-responsive"
import breakpoints from "../../Utilities/breakpoints.ts"

export default function Carousel() {
    // Match the Tailwind breakpoints
    const isSm = useMediaQuery(breakpoints.sm)
    
    const { id } = useParams()
    const realId = Number(id)
    const carouselRef = useRef<SlCarouselType | null>(null)

    const data = useLoaderData() as Array<Image>
    const navigate = useNavigate()

    useEffect(() => {
        console.log('effect')
        // Make sure the window scroll position gets reset to the top
        window.scrollTo(0, 0)
        // Need to get this out of the flow or it doesn't work right
        setTimeout(() => {
            carouselRef?.current?.goToSlide(realId, 'auto')
        }, 0)
        // Purposefully do not want realId to trigger an update
        // here as we have already made the transition, so omitting
        // it from the deps array.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const listItems = data.map((image, index) => {
        const key = `item${index}`
        return (
            <SlCarouselItem 
                key={key}
                className="h-full"
            >
                <CarouselCardView
                    image={image}
                ></CarouselCardView>
            </SlCarouselItem>
        )
    })

    return (
        <div className="h-svh py-8 px-0 lg:px-4 mt-[-2rem] lg:mt-[-1rem]">
            <div className="flex flex-row-reverse">
                <button
                    type="button"
                    className="cursor-pointer px-4"
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    <i className="fa-regular fa-circle-xmark hover:font-bold text-2xl text-slate-500"></i>
                </button>
            </div>
            <SlCarousel
                mouse-dragging
                navigation={!isSm}
                ref={carouselRef}
                className="h-full"
                onSlSlideChange={(event) => {
                    navigate(`../${event.detail.index}`, { relative: 'path', replace: true })
                }}
            >
                {listItems}
            </SlCarousel>
        </div>
    )
}
