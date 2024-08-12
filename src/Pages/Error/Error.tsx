import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function Error() {
    let message = "Uh-oh something went wrong!.."

    const error = useRouteError()
    if (isRouteErrorResponse(error)) {
        message = "It's not you, it's us. Please try again later!"
    }

    return (
        <div className='flex flex-row justify-center p-5'>
            <div className="text-center text-2xl text-slate-100 bg-black/75 p-12 rounded">
                <p className="text-4xl">{message}</p>
            </div>
        </div>
    );
}
