import "./Event.css"

export default function Event({ eventInfo }){

    const formatDate = (date) => {
        let nums = date.split("-")
        return nums[2] + "/" + nums[1] + "/" + nums[0]
    }

    return(
        <div>
            <h2 className="title">{eventInfo["title"]}</h2>
            <div className="content">
                <div>{eventInfo["description"]}</div>
                <div>{formatDate(eventInfo["start"])} - {formatDate(eventInfo["start"])}</div>
                <div>{eventInfo["location"]}</div>
            </div>
        </div>
    );
}