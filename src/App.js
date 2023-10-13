import { Outlet } from "react-router-dom";
import Head from "./Head/Head";
import NavBar from "./Head/NavBar";
import Footer from "./Footer";

export default function App(){
    return(
        <div className='flex justify-center'>
            <div className='w-[50%] max-w-[50%]'>
                <Head />
                <NavBar />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
}