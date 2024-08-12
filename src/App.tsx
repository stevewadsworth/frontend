import { Outlet, ScrollRestoration } from "react-router-dom";
import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.0/cdn/');

export default function App() {
    return (
        <div className="container min-h-screen mx-auto flex flex-col">
            <Outlet />
            <ScrollRestoration />
        </div>
    );
}
