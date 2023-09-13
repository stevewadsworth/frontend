import "./Event.css"

export default function Event({ eventInfo }){
    return(
        <div>
            <h2 className="title">{eventInfo["title"]}</h2>
            <div className="content">
                <div>{eventInfo["description"]}</div>
                <div>{eventInfo["start"]} - {eventInfo["end"]}</div>
                <div>{eventInfo["location"]}</div>
            </div>
        </div>
    );
}