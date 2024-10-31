import { fetchJSONFromStorage } from "../Utilities/firebase.ts"
import Memo from "../Utilities/Memo.ts"
import { ExhibitionsList } from "../Models/Exhibition.ts"

const exhibitionsMemo = new Memo(exhibitionsFetcher)

async function exhibitionsFetcher(): Promise<ExhibitionsList | undefined> {
    return await fetchJSONFromStorage('events/events.json')
}

export default async function exhibitionsLoader(): Promise<ExhibitionsList | undefined> {
    return await exhibitionsMemo.getData()
}
