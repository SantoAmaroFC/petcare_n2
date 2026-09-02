import type React from "react";

type CardProps = {
    link?: string;
    text?: string;
    backgroundColor?: string;
    border?: string;
}

export default function Button({text, backgroundColor, border, link}: CardProps) {
    return (
        <div className=" px-6 py-2.5 rounded-full shadow-2xl">

            <h1></h1>

        </div>
    )   
}