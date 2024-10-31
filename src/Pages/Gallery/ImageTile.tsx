import { Link } from "react-router-dom";
import { Image } from "../../Models/Image";
import { useEffect, useRef, useState } from "react";
import { getURLForPath } from "../../Utilities/firebase.ts";
import SyncLoader from "react-spinners/SyncLoader"

export default function ImageTile(props: { image: Image, index: number}) {
    const [isLoading, setIsLoading] = useState(true);
    const [imageURL, setImageURL] = useState('')
    const placeholderRef = useRef(null);
  
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        // Initiating Intersection Observer
        const observer = new IntersectionObserver((entries) => {
          // Set actual image source && unobserve when intersecting
          if (entries[0].isIntersecting) {
            getURLForPath(`images/${props.image.image}`).then((url) => {
                setImageURL(url);
            })

            if (placeholderRef && placeholderRef.current) {
                observer.unobserve(placeholderRef.current);
            }
          }
        });
    
        // observe for an placeholder image
        if (placeholderRef && placeholderRef.current) {
          observer.observe(placeholderRef.current);
        }
      }, [props.image.image]);
    

    return (
        <>
          {isLoading && (
            <div
                ref={placeholderRef}
                className="w-full aspect-square flex justify-center"
            >
                <div className="flex flex-col justify-center">
                    <SyncLoader className="opacity-25" size={10} />
                </div>
            </div>
          )}
          {imageURL && (
            <Link
                to={"/gallery/" + props.index}
                preventScrollReset={false}
            >
                <img
                    ref={imgRef}
                    src={imageURL}
                    style={isLoading ? { display: "none" } : { display: "block" }}
                    alt={props.image.title}
                    onLoad={() => setIsLoading(false)}
                />
            </Link>
          )}
        </>
      )
}
