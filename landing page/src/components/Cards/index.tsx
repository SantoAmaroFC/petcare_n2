import type React from "react";


type CardProps = {
    title: string;
    description: string;
    icon: React.ReactElement;
    backgroundColor?: string;
}


export default function Cards({ title, description, icon, backgroundColor }: CardProps) {
    return (
        <div className="bg-white border-[#ccc] rounded-lg p-8 mb-12 max-w-100">

            
            <div className={`${backgroundColor} rounded-2xl p-2 w-12`}>{icon}</div>
            <p className="mt-6 font-bold text-[18px]">{title}</p>

            <p className="mt-4">{description}</p>
        </div>

    );
}