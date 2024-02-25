import React from "react";

export default function Footer() {
    return (
        <footer className="text-xs text-slate-600 flex flex-col items-center py-4">
            <p>© 2022 by Melissa Wadsworth</p>
            <p>Figurative Artist</p>
            <a href="https://www.instagram.com/melissa_wadsworth_artist/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram text-lg"></i>
            </a>
        </footer>
    )
}
