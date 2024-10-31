import Event from "./Event.tsx";
import ExhibitionViewModel from "./ExhibitionViewModel.ts";
import { useLoaderData } from "react-router-dom";
import Head from "../Fragments/Head/Head.tsx";
import NavBar from "../Fragments/Head/NavBar.tsx";
import Footer from "../Fragments/Footer/Footer.tsx";
import { ExhibitionsList } from "../../Models/Exhibition.ts";

export default function Exhibitions() {
    const data = useLoaderData() as ExhibitionsList
    const model = new ExhibitionViewModel(data)

    const upcoming = model.upcoming.map((event, i) => {
        return <Event key={i} eventInfo={event} />
    })
    const current = model.current.map((event, i) => {
        return <Event key={i} eventInfo={event} />
    })
    const past = model.past.map((event, i) => {
        return <Event key={i} eventInfo={event} />
    })

    return (
        <>
            <Head />
            <NavBar />
            <div className="flex justify-center">
                <div className="max-w-prose">
                    {(upcoming.length > 0 ? <>
                        <h2 className="text-2xl font-thin">Upcoming</h2>
                        <div>{upcoming}</div>
                    </> : "")}
                    {(current.length > 0 ? <>
                        <h2 className="text-2xl font-thin">Current</h2>
                        <div>{current}</div>
                    </> : "")}
                    {(past.length > 0 ? <>
                        <h2 className="text-2xl font-thin">Past</h2> <div>{past}</div>
                    </> : "")}
                </div>
            </div>
            <Footer />
        </>
    );
}
