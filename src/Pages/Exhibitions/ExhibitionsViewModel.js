import eventsData from "../../Models/EventsModel.ts"

export default async function ExhibitionsViewModel(){
    let events = await eventsData
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
