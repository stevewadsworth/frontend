import { useEffect } from "react";
import { isRouteErrorResponse, Link, useNavigate, useRouteError } from "react-router-dom";
import './showError.css'
export default function ShowError() {
    const error = useRouteError()
    let message = "Uh-oh something went wrong!.."

    if (isRouteErrorResponse(error)) {
        message = error.data || error.statusText;
    } else if (error instanceof Error) {
        message = error.message;
    } else if (error && typeof error === 'object' && 'message' in error) {
        message = error.message as string;
    } else if (typeof error === 'string') {
        message = error;
    }

    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/")
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className='flex flex-row justify-center p-5'>
            <div className="text-center text-2xl p-12 rounded">
                <p className="text-4xl">{message}</p>
                <br />
                <p className="text-2xl">You will shortly be redirected to the home page.</p>
                <p className="text-2xl underline"><Link className="color-revert" to="/" aria-label="Return to home page">If this does not happen, please click here</Link></p>
            </div>
        </div>
    );
}
