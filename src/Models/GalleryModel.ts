import firebase from "../firebase.ts";
import { Image } from "./Image.ts";
import { Images } from "./Images.ts";

export default async function GalleryModel(): Promise<Image[] | undefined> {
    let gallery: Image[]
    try {
        // Read the JSON from storage
        const response = await firebase.fetchFromStorage('images/images.json')
        let galleryJson = await response.json() as Images
        gallery = galleryJson?.Images
        if (!gallery) {
            throw new Response("Not Found", { status: 404 })
        }
    } catch {
        throw new Response("Not Found", { status: 404 })
    }
    return gallery
}
