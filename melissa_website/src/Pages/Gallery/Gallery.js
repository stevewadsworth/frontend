import GalleryViewModel from "./GalleryViewModel"
import { Link } from "react-router-dom";

export default function Gallery(){

    const imagejson = GalleryViewModel()["Images"];

    let numOfRows = 3;

    return (
        <div className="flex space-x-4">
            { [...Array(numOfRows)].map((_, rowNum) => {
                return(
                    <div className="flex flex-col space-y-4">
                        {imagejson.filter((_, i) => {
                            return (i+rowNum) % numOfRows === 0;
                        }).map((image, index) => {
                            return (
                                <Link to={"/image-view/"+(Number(index))}>
                                    <img 
                                    src={"./TestImages/"+image["image"]}
                                    alt={image["title"]}
                                    className="hover:opacity-50 transition-all hover:scale-105"
                                    ></img>
                                </Link>);
                        })}
                    </div>
                    )
                })}
        </div>
    );
}
