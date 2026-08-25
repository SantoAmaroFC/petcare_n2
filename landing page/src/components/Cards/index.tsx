import { CiCalendar } from "react-icons/ci";

type CardProps = {
    title: string;
    description: string;
    icon: string;
}


export default function Cards({ title, description, icon }: CardProps) {
    return (
        <div className="w-full max-w-sm overflow-hidden rounded-xl bg-white shadow-md transition hover:scale-105">

            <p className="flex items-center gap-2 bg-[#DCEFE4] p-2.5 rounded-full">
                {icon}
            </p>


            <div className="p-5">
                <h2 className="text-xl font-bold text-gray-800">
                    {title}
                </h2>

                {description && (
                    <p className="mt-2 text-sm text-gray-500">
                        {description}
                    </p>
                )}
            </div>

        </div>

    );
}