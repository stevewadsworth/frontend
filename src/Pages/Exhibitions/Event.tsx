import React from "react";

export default function Event({ eventInfo }){

    const formatDate = (date) => {
        let nums = date.split("-")
        return nums[2] + "/" + nums[1] + "/" + nums[0]
    }

    return(
        <div className="m-8 font-light">
            <h2 className="mb-1 text-xl font-extralight">{eventInfo["title"]}</h2>
            <div className="text-sm">
                <div className="mb-1">{eventInfo["description"]}</div>
                <div>{formatDate(eventInfo["start"])} - {formatDate(eventInfo["start"])}</div>
                <div>{eventInfo["location"]}</div>
            </div>
        </div>
    );
}
