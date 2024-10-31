import { useLoaderData, useNavigate, useParams } from "react-router-dom"
import { Images } from "../../Models/Image.ts"
import SlCarousel from '@shoelace-style/shoelace/dist/react/carousel/index.js'
import SlCarouselItem from '@shoelace-style/shoelace/dist/react/carousel-item/index.js'
import CarouselCardView from "./CarouselCard.tsx"
import { useMediaQuery } from "react-responsive"
import breakpoints from "../../Utilities/mediaBreakpoints.ts"
import './carousel.css'

export default function Carousel(props?: { backLink?: string }) {
    // Match the Tailwind breakpoints
    const isSm = useMediaQuery(breakpoints.sm)
    
    const { id } = useParams()
    const startId = Number(id)

    const images = useLoaderData() as Images
    const data = images.Images

    if (startId < 0 || startId >= data.length) {
        console.error(`Invalid slide index: ${startId}`)
        throw new Error(`Sorry, the image you are looking for is not available.`)
    }

    const navigate = useNavigate()

    const backLink = props?.backLink || '/'

    let slide = Math.min(startId, data.length - 1)

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
                        navigate(backLink);
                    }}
                >
                    <i className="fa-regular fa-circle-xmark hover:font-bold text-2xl text-slate-500"></i>
                </button>
            </div>
            <SlCarousel
                mouse-dragging
                navigation={!isSm}
                className="custom-carousel h-full"
                activeSlide={slide}
                onSlSlideChange={(event) => {
                    slide = event.detail.index
                    navigate(`../${event.detail.index}`, { relative: 'path', replace: true })
                }}
            >
                {listItems}
            </SlCarousel>
        </div>
    )
}
