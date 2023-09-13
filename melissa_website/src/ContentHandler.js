import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Exhibitions from "./Pages/Exhibitions/Exhibitions";
import Gallery from "./Pages/Gallery/Gallery";
import pages from "./PagesInfo";


export default function ContentHandler({ currentPage }){
    switch (currentPage){
        case pages.Home:
            return <Gallery />
        case pages.About:
            return <About />
        case pages.Contact:
            return <Contact />
        case pages.Exhibitions:
            return <Exhibitions />
        default:
            return <p>Error, page not found</p>
    }
}