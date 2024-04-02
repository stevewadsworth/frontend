import React from "react";
import Head from "../../Head/Head.tsx";
import NavBar from "../../Head/NavBar.tsx";
import Footer from "../../Footer.tsx";

export default function About() {
    return (
        <>
            <Head />
            <NavBar />
            <div className="flex flex-column justify-center m-5">
                <div>
                    <h1 className="text-center m-5 text-4xl font-thin">About</h1>
                    <div className="max-w-prose font-light">
                        <p className="m-5 text-justify">I am interested in both the small intricate details of nature and how we connect to it through trees, the landscape, clouds and simply the beauty of being, with all its quirks. </p>
                        <p className="m-5 text-justify">I have always been attracted to working with my hands and started my artistic career in ceramics, using clay and decorating with surface patterns. Several years later, and whilst raising my family, I have returned to drawing and picked up a stick of charcoal... I instantly felt connected to nature and art and most importantly my hands.</p>
                        <p className="m-5 text-justify">Currently I am exploring acrylics, which is opening up a whole new world of colour and possibilities...</p>
                        <br></br>
                        <p className="m-5 text-center">Available for commissions</p>
                        <p className="m-5 text-center hover:text-blue-600"><a href="mailto:enquiries@melissawadsworth.co.uk">enquiries@melissawadsworth.co.uk</a></p>
                        <div className="flex justify-center hover:text-blue-600">
                            <a href="https://www.instagram.com/melissa_wadsworth_artist/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-instagram text-lg"></i> melissa_wadsworth_artist
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
