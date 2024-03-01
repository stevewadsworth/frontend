import { Exhibition } from "../../Models/Exhibition";

export default class ExhibitionsViewModel {
    constructor(private exhibitions: Exhibition[]) {}

    private currentDate = new Date().getTime();

    upcoming = this.exhibitions.filter((exhibition) => {
        return (this.currentDate - new Date(exhibition.start).getTime() < 0)
    })

    past = this.exhibitions.filter((exhibition) => {
        return (this.currentDate - new Date(exhibition.end).getTime() > 0)
    })

    current = this.exhibitions.filter((exhibition) => {
        return (this.currentDate - new Date(exhibition.start).getTime() > 0 &&
                this.currentDate - new Date(exhibition.end).getTime() < 0)
    })
}
