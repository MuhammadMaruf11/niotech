'use client'
import { FC } from "react";
import { motion } from 'framer-motion';

interface SectionProps {
    titleHeading: string;
}

const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const SectionTitleWhite: FC<SectionProps> = ({ titleHeading }) => {
    return (
        <div className="relative mb-20">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={headingVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="after:content-[''] after:bg-gray-300 after:w-10 after:h-px after:absolute after:left-1/2 after:top-12 after:-translate-x-1/2"
            >
                <h3 className="text-center font-bold text-white uppercase">{titleHeading}</h3>
            </motion.div>
        </div>
    );
};

export default SectionTitleWhite;
