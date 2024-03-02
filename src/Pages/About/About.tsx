import React from "react";

export default function About() {
    return (
        <div className="flex flex-column justify-center m-5">
            <div>
                <h1 className="text-center m-5 text-4xl font-thin">About</h1>
                <div className="max-w-prose font-light">
                    <p className="m-5 text-justify">For as long as I can remember I have been attracted by patterns within the landscape, whether shadows, the structure of a tree or buildings. I grew up in the northern market town of Wigan where mining pit heads dominated the horizon. These strong architectural shapes developed my senses towards 3D work and so I headed to Birmingham to study for a degree in Ceramics and Glass.</p>
                    <p className="m-5 text-justify">Relocating several times around the country has re-focused my passion towards painting and drawing, but still with a focus on sculptural forms.</p>
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
    )
}
