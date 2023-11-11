import firebase from "../Firebase";

let eventsData = new Promise((resolve, _reject) => {
    // Read the JSON from storage
    firebase.fetchFromStorage('events/events.json').then(response => {
        const events = response["events"];

        events.sort((a, b) => {
            const aDate = new Date(a["start"])
            const bDate = new Date(b["start"])
            return bDate-aDate;
        })

        resolve(events)
    })
})

export default eventsData
