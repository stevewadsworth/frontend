import { fetchJSONFromStorage } from "../Utilities/firebase";
import { Images } from "../Models/Image";
import { memo } from "../Utilities/memo";

const galleryMemo = memo(() => fetchJSONFromStorage<Images | undefined>('images/images.json'))

export default async function galleryLoader() {
  return await galleryMemo()
};
