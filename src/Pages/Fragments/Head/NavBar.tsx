import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
    const path = useLocation()["pathname"];

    const paths = ["Gallery", "Exhibition", "About"]
    const pathLinks = paths.map((name) => {
        const link = '/' + name.toLowerCase()
        const selected = path.toLowerCase().endsWith(link)
        return <Link
            key={name}
            to={link}
            className={(selected ? "text-black" : "text-gray-600") + " cursor-pointer hover:text-black px-4 transition-all active:text-black"}>
            {name}
        </Link>
    })

    return (
        <div className="pb-4">
            <hr></hr>
            <div className="flex justify-center">
                {pathLinks}
            </div>
            <hr></hr>
        </div>
    );
}
