import Link from "next/link";

interface Props {
    name: string
    content: string
    href: string
}

export default function Content({name, content, href} : Props) {
    return (
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{name}</h2>
            <Link href={href}>
            <p className="leading-relaxed text-base mb-4">{content}</p>
            <p className="text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </p>
            </Link>
        </div>
    );
}