import firebase from "../firebase.ts";
import { Exhibition } from "./Exhibition.ts";

let eventsData = new Promise((resolve, _reject) => {
    // Read the JSON from storage
    firebase.fetchFromStorage('events/events.json').then(response => {
        response.json().then(parsedResponse => {
            const events = parsedResponse["events"];

            events.sort((a, b) => {
                const aDate = new Date(a["start"]).getTime()
                const bDate = new Date(b["start"]).getTime()
                return bDate - aDate;
            })

            resolve(events)
        })
    })
})

export default eventsData

let exhibitions: Exhibition[] | undefined = undefined

export async function EventsModel(): Promise<Exhibition[] | undefined> {
    if (!exhibitions) {
        try {
            const response = await firebase.fetchFromStorage('events/events.json')
            const parsedResponse = await response.json()
            exhibitions = parsedResponse["events"]
            exhibitions?.sort((a, b) => {
                const aDate = new Date(a["start"]).getTime()
                const bDate = new Date(b["start"]).getTime()
                return bDate - aDate;
            })
        } catch {
            throw new Response("Not Found", { status: 404 })
        }
    }
    return exhibitions
}
