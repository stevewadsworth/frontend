import GalleryViewModel from "./GalleryViewModel"

export default function Gallery(){

    const imagejson = GalleryViewModel()["Images"];

    let numOfRows = 3;
    

    return (
        <div className="flex space-x-4">
            { [...Array(numOfRows)].map((_, rowNum) => {
                return(
                    <div className="flex-col space-y-4">
                        {imagejson.filter((_, i) => {
                            return (i+rowNum) % numOfRows === 0;
                        }).map((i) => {
                            return <img src={"./TestImages/"+i["image"]}></img>
                        })}
                    </div>
                    )
                })}
        </div>
    );
}
