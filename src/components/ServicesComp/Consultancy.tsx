
'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
};

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const Consultancy = () => {
    return (
        <div className="">
            <motion.div
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-4 md:mb-0 md:mr-4"
            >
                <Image
                    width={400} height={0}
                    className='float-left me-4 mb-4'
                    src="/img/services/Consultancy.jpg"
                    alt="consultancy"
                />
            </motion.div>
            <motion.div
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, ease: "easeOut" }}
                className=""
            >
                <h5 className='text-[#e9b021] text-xl font-semibold'>Consultancy</h5>
                <div className="space-y-4">
                    <p>Homes are more connected than ever before with the rapid growth and development of the smart home. Developers are preparing for this technological revolution, as homes are no longer just composed of building materials.</p>
                    <p>Building control and automation is a fast growing field, not only in commercial buildings but also in homes and residential developments. The need for more sustainable building services design is greater than ever. We can help being key part of the overall construction team and getting involved at the earliest possible stage. Applications range from managing the energy usage in a building to reduce carbon footprint, to offering a householder the ability to run their home from a smartphone and tablets.</p>
                    <p>Lighting features range from single channel control, to mood lighting/scenes control and energy management via the use of sensors.</p>
                    <p>Heating, cooling and ventilation control allows fully climate controlled zones, minimizing energy usage in your property and improves your comfort.</p>
                    <p>Blinds, curtains, shutters and window controls provide ease of use, and are also effective to control operation to reduce heat loss during winter and to keep cool during the summer.</p>
                </div>
            </motion.div>
        </div>
    );
};

export default Consultancy;
