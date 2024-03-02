import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
    //className={(link===currentPage ? "text-black" : "text-gray-600")+" cursor-pointer hover:text-black px-4 transition-all active:text-black"}

    const path = useLocation()["pathname"];
    console.log(path);

    const paths = ["Gallery", "Exhibition", "About"]
    const pathLinks = paths.map((name) => {
        let link = name.toLowerCase()
        let selected = path.toLowerCase().endsWith(link)
        return <Link
            key={name}
            to={link}
            className={(selected ? "text-black" : "text-gray-600") + " cursor-pointer hover:text-black px-4 transition-all active:text-black"}>
            {name}
        </Link>
    })



    return (
        <div className="pb-4 ">
            <hr></hr>
            <div className="flex justify-center">
                {pathLinks}
            </div>
            <hr></hr>
        </div>
    );
}
