import { FC } from "react"

interface sectionProps {
    titleHeading: string
}

const SectionTitle: FC<sectionProps> = ({ titleHeading }) => {
    return (
        <div className="mb-20 after:content-[''] after:bg-black after:w-10 after:h-0.5 after:absolute relative after:left-1/2 after:top-12 after:-translate-x-1/2">
            <h3 className="text-center font-bold text-gray-800 uppercase">{titleHeading}</h3>
        </div>
    )
}

export default SectionTitle

