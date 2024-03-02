import Event from "./Event.tsx";
import { Exhibition } from "../../Models/Exhibition.ts";
import ExhibitionsViewModel from "./ExhibitionsViewModel.ts";
import React from 'react';
import { useLoaderData } from "react-router-dom";

export default function Exhibitions() {
    const data = useLoaderData() as Exhibition[]
    const viewModel = new ExhibitionsViewModel(data)

    const upcoming = viewModel.upcoming.map((event, i) => {
        return <Event key={i} eventInfo={event} />
    })
    const current = viewModel.current.map((event, i) => {
        return <Event key={i} eventInfo={event} />
    })
    const past = viewModel.past.map((event, i) => {
        return <Event key={i} eventInfo={event} />
    })

    return (
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
    );
}
