import TestEvents from "./TestEventJson"

import Event from "./Event";

export default function Exhibitions(){
    
    let events = TestEvents["events"];
    
    let formatted = [];
    for (let i=0; i < events.length; i++){
        formatted.push(<Event key={i} eventInfo={events[i]} />)
    }

    return(
        <div>
            {formatted}
        </div>
    );
}