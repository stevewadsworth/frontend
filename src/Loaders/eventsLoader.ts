import firebase from "../firebase.ts"

export default async function eventsLoader(): Promise<Response> {
    try {
        return firebase.fetchFromStorage('events/events.json')
    } catch {
        throw new Response("Not Found", { status: 404 })
    }
}
