import pages from "../PagesInfo";

export default function NavBar({ currentPage, setPage }){

    let tabs = [];
    for (const [page, link] of Object.entries(pages)){
        tabs.push(<div 
            onClick={() => {setPage(link)}}
            className={(link===currentPage ? "text-black" : "text-gray-600")+" cursor-pointer hover:text-black px-4 transition-all active:text-black"}
            key={page}
            >
                {page}
            </div>)
    }

    return (
        <div className="py-4 ">
            <hr></hr>
            <div className="flex justify-center">
                {tabs}
            </div>
            <hr></hr>
        </div>
    );
}
