import firebase from "../firebase.ts";
import { Images } from "./Images.ts";
import { Image } from "./Image.ts";

let galleryJson: Images | undefined = undefined
let gallery: Array<Image> | undefined = undefined

export default async function GalleryModel(): Promise<Image[] | undefined> {
    if (!gallery) {
        try {
            // Read the JSON from storage
            const response = await firebase.fetchFromStorage('images/images.json')
            galleryJson = await response.json()
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
    }
    return gallery
}
