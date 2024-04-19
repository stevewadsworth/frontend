import React from "react";

export default function Event({ eventInfo }){

    const formatDate = (date: string) => {
        let theDate = new Date(date)
        return `${theDate.getDate()}/${theDate.getMonth() + 1}/${theDate.getFullYear()}`
    }

    const oneDay = new Date(eventInfo.start).getTime() === new Date(eventInfo.end).getTime()

    return(
        <div className="m-8 font-light">
            <h2 className="mb-1 text-xl font-extralight">{eventInfo["title"]}</h2>
            <div className="mb-1 text-base">{eventInfo["subTitle"]}</div>
            <div className="text-sm">
                <div className="mb-1">{eventInfo["description"]}</div>
                { oneDay ? (
                    <div>{formatDate(eventInfo.start)}</div>
                ) : (
                    <div>{formatDate(eventInfo.start)} - {formatDate(eventInfo.end)}</div>
                )}
                <div>{eventInfo["location"]}</div>
            </div>
        </div>
    );
}
