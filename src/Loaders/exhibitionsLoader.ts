import { fetchJSONFromStorage } from "../Utilities/firebase.ts"
import { memo } from "../Utilities/memo.ts"
import { ExhibitionsList } from "../Models/Exhibition.ts"

const exhibitionsMemo = memo(() => fetchJSONFromStorage<ExhibitionsList | undefined>('events/events.json'))

export default async function exhibitionsLoader(): Promise<ExhibitionsList | undefined> {
    return await exhibitionsMemo()
}
