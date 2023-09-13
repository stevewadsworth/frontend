import TestEvents from "./TestEventJson";

export default function ExhibitionsViewModel(){

    //replace with fethcing from a database
    let events = TestEvents["events"];
    
    events.sort((a, b) => {
        const aDate = new Date(a["start"])
        const bDate = new Date(b["start"])
        return bDate-aDate;
    })

    const currentDate = new Date();

    let upcoming = events.filter((event) => {
        return (currentDate - new Date(event["start"]) < 0)
    })
    let past = events.filter((event) => {
        return (currentDate - new Date(event["end"]) > 0)
    })
    let current = events.filter((event) => {
        return (currentDate - new Date(event["start"]) > 0 && currentDate - new Date(event["end"]) < 0)
    })

    return [upcoming, current, past];

}