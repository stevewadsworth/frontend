import Event from "./Event";
import ExhibitionsViewModel from "./ExhibitionsViewModel";
import React, { useState, useEffect } from 'react';

export default function Exhibitions(){
    const [upcomingEvents, setUpcoming] = useState(null)
    const [currentEvents, setCurrent] = useState(null)
    const [pastEvents, setPast] = useState(null)

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                let [upcoming, current, past] = await ExhibitionsViewModel();
                setUpcoming(upcoming);
                setCurrent(current)
                setPast(past)
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const upcoming = upcomingEvents.map((event, i) => {
        return <Event key={i} eventInfo={event} />
    })
    const current = currentEvents.map((event, i) => {
        return <Event key={i} eventInfo={event} />
    })
    const past = pastEvents.map((event, i) => {
        return <Event key={i} eventInfo={event} />
    })

    return(
        <div>
            {(upcoming.length > 0 ? <>
                <h2 className="text-2xl font-bold">Upcoming</h2>
                <div>{upcoming}</div>
            </> : "")}
            {(current.length > 0 ? <>
                <h2 className="text-2xl font-bold">Current</h2>
                <div>{current}</div>
            </> : "")}
            {(past.length > 0 ? <>
                <h2 className="text-2xl font-bold">Past</h2> <div>{past}</div>
            </> : "")}
        </div>
    );
}
