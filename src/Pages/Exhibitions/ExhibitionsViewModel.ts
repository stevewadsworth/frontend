import { Exhibition } from "../../Models/Exhibition";
import { ExhibitionsList } from "../../Models/ExhibitionsList";

export default class ExhibitionsViewModel {
    private currentDate = new Date().getTime();

    public upcoming: Exhibition[]
    public past: Exhibition[]
    public current: Exhibition[]

    constructor(exhibitions: ExhibitionsList) {
        let eventsList = exhibitions.events
        eventsList?.sort((a, b) => {
            const aDate = new Date(a["start"]).getTime()
            const bDate = new Date(b["start"]).getTime()
            return bDate - aDate;
        })

        this.upcoming = eventsList.filter((exhibition) => {
            return (this.currentDate - new Date(exhibition.start).getTime() < 0)
        })

        this.past = eventsList.filter((exhibition) => {
            return (this.currentDate - new Date(exhibition.end).getTime() > 0)
        })

        this.current = eventsList.filter((exhibition) => {
            return (this.currentDate - new Date(exhibition.start).getTime() > 0 &&
                    this.currentDate - new Date(exhibition.end).getTime() < 0)
        })
    }
}
