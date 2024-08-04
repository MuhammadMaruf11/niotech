'use client'
import { motion } from 'framer-motion';
import { serviceDesignData } from '@/allData/serviceDesignData';
import Image from 'next/image';

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
};

const Design = () => {
    return (
        <div className='grid md:grid-cols-2 gap-6'>
            <motion.div
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h5 className='text-[#e9b021]'>Design</h5>
                <strong>Drafting services for all aspects of 2D & 3D</strong>
                <div className="space-y-4">
                    <p>With many years experience in developing innovative and cost effective system designs that are fit for purpose and compliant with current design guides, codes of good practice and applicable regulation, we are able to provide a quality 2D & 3D CAD drafting service and produce CAD drawings in a wide range of file formats. We offer the skills and knowledge to produce professional electrical/AV/lighting drawings to meet your requirements.</p>
                    <p>We can design lighting systems, power systems, power distribution systems, fire protection systems and even public address, access control, or closed circuit television designs. Whether you need schematic symbol diagrams or site planning services; electrical planning and lighting set-up diagrams; or just wiring diagrams–we’re your source for accurate drawings in synch with the latest trends in the industry.</p>
                    <p>Services offered:</p>
                </div>
                <ul>
                    {serviceDesignData?.map((data, index) => {
                        return (
                            <li key={index}> <i className="fa-sharp fa-regular fa-angle-right"></i> {data.title}</li>
                        )
                    })}
                </ul>
                <p>Electrical design is one of the most critical elements of successful engineering projects.</p>
            </motion.div>
            <div className='space-y-5'>
                <motion.div
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Image width={460} height={0} src="/img/services/design1.jpg"
                        alt="service_design_1" />
                </motion.div>
                <motion.div
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Image width={460} height={0} src="/img/services/design2.jpg"
                        alt="service_design_2" />
                </motion.div>
            </div>
        </div>
    );
};

export default Design;
