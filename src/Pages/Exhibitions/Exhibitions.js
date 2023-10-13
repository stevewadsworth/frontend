import Event from "./Event";
import ExhibitionsViewModel from "./ExhibitionsViewModel";

export default function Exhibitions(){

    
    let [upcoming, current, past] = ExhibitionsViewModel();

    upcoming = upcoming.map((event, i) => {
        return <Event key={i} eventInfo={event} />
    })
    current = current.map((event, i) => {
        return <Event key={i} eventInfo={event} />
    })
    past = past.map((event, i) => {
        return <Event key={i} eventInfo={event} />
    })

    return(
        <div>
            {(upcoming.length > 0 ? <>
                <h2 className="text-2xl font-bold">Upcoming</h2> 
                <div>{upcoming}</div>
            </> : "")} 
            {(current.length > 0 ? <>
                <h2 className="text-2xl font-bold">Current</h2> 
                <div>{current}</div>
            </> : "")} 
            {(past.length > 0 ? <>
                <h2 className="text-2xl font-bold">Past</h2> <div>{past}</div>
            </> : "")} 
        </div>
    );
}