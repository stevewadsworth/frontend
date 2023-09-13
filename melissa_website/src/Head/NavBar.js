
import pages from "../PagesInfo";
import "./NavBar.css"

export default function NavBar({ currentPage, setPage }){

    let tabs = [];
    for (const [page, link] of Object.entries(pages)){
        tabs.push(<div 
            onClick={() => {setPage(link)}}
            className={(link===currentPage ? "current tab" : "tab")}
            key={page}
            >
                {page}
            </div>)
    }

    return (
        <>
            <hr></hr>
            <div style={{display:"flex", justifyContent:"center"}}>
                {tabs}
            </div>
            <hr></hr>
        </>
    );
}
