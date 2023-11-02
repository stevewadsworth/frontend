import firebase from "../Firebase";

let galleryData = new Promise((resolve, reject) => {
    // Read the JSON from storage
    firebase.fetchFromStorage('images/images.json').then(response => {
        const rawData = response["Images"];
        // The JSON contains image paths in the storage bucket so we need to convert the to URLs
        const urls = rawData.map(element => {
            const url = firebase.getURL(`images/${element.image}`)
            return url
        })
        // Now we need to wait for them all to resolve
        Promise.all(urls).then(newUrls => {
            // Finally map the image URLs to the JSON objects
            let imageJson = rawData.map(element => {
                return {
                    ...element,
                    image: newUrls.shift(),
                }
            })
            resolve(imageJson)
        })
    })
})

export default galleryData

export async function getEntryByUUID(uuid) {
    return await galleryData.find(element => element.uuid === uuid)
}
