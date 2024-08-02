import { FC } from "react"

interface sectionProps {
    titleHeading: string
}

const SectionTitleWhite: FC<sectionProps> = ({ titleHeading }) => {
    return (
        <div className="mb-20 after:content-[''] after:bg-gray-300 after:w-10 after:h-px after:absolute relative after:left-1/2 after:top-12 after:-translate-x-1/2">
            <h3 className="text-center font-bold text-white uppercase">{titleHeading}</h3>
        </div>
    )
}

export default SectionTitleWhite

