import GalleryViewModel from "./GalleryViewModel"

export default function Gallery(){

    const imagejson = GalleryViewModel()["Images"];

    let numOfRows = 3;
    

    return (
        <div className="flex">
            { [...Array(numOfRows)].map((_, rowNum) => {
                return(
                    <div>
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
