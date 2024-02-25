import firebase from "../firebase.ts";

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
