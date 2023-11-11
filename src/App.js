import { Outlet } from "react-router-dom";
import Head from "./Head/Head";
import NavBar from "./Head/NavBar";
import Footer from "./Footer";

export default function App() {
    return (
        <div className="container min-h-screen mx-auto flex flex-col">
            <Head />
            <div className='flex-1 flex justify-center'>
                <div className='w-[80%] max-w-[80%]'>
                    <NavBar />
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
}
