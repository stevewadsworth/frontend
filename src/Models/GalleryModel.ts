import firebase from "../firebase.ts";
import { Image } from "./Image.ts";
import { Images } from "./Images.ts";

export default async function GalleryModel(): Promise<Image[] | undefined> {
    let gallery: Image[]
    try {
        // Read the JSON from storage
        const response = await firebase.fetchFromStorage('images/images.json')
        let galleryJson = await response.json() as Images
        const galleryRaw = galleryJson?.Images
        if (!galleryRaw) {
            throw new Response("Not Found", { status: 404 })
        }
        // The JSON contains image paths in the storage bucket so we need to convert the to URLs
        gallery = await Promise.all(galleryRaw.map(async element => {
            const url = await firebase.getURLForPath(`images/${element.image}`)
            return { ...element, image: url }
        }))
    } catch {
        throw new Response("Not Found", { status: 404 })
    }
    return gallery
}
