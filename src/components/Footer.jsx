import React from "react";
// import ReactDOM from "react-dom/client";


const date = new Date();
const currentYear = date.getFullYear();

export default function Footer() {
    return (
        <footer>
            <p>Copyright @PJB {currentYear}</p>
        </footer>
    );
}

