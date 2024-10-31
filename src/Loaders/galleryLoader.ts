import { fetchJSONFromStorage } from "../Utilities/firebase";
import { Images } from "../Models/Image";
import Memo from "../Utilities/Memo";

const galleryMemo = new Memo(galleryFetcher)

async function galleryFetcher(): Promise<Images | undefined> {
  // Read the JSON from storage
  return await fetchJSONFromStorage('images/images.json')
}  

export default async function galleryLoader() {
  return await galleryMemo.getData()
};
