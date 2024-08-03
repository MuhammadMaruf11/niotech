/* eslint-disable @next/next/no-img-element */
"use client";
import { FC } from 'react';
import { motion } from 'framer-motion';

interface SectionDescription {
    paragraph: string;
}

interface sectionProps {
    sectionTitleOne: string;
    sectionTitleTwo: string;
    sectionTitileColorOne: string;
    sectionTitileColorTwo: string;
    sectionImage: string;
    sectionBodyDescriptionsData?: SectionDescription[];
}

const SectionBodyRight: FC<sectionProps> = ({ sectionTitleOne, sectionTitleTwo, sectionTitileColorOne, sectionTitileColorTwo, sectionImage, sectionBodyDescriptionsData }) => {
    return (
        <div className='container mx-auto max-w-screen-xl px-3'>
            <div className="grid lg:grid-cols-2 gap-6">
                <motion.div
                    className=""
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <img className='mx-auto' loading="lazy" src={sectionImage} alt="section_right_side" />
                </motion.div>
                <motion.div
                    className=""
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h3 className='mb-2'>
                        {sectionTitleOne && sectionTitleOne}
                        {sectionTitileColorOne && <strong className='text-[#0c71c3]'>{sectionTitileColorOne}</strong>}
                        {sectionTitleTwo && sectionTitleTwo}
                        {sectionTitileColorTwo && <strong className='text-[#00b202]'>{sectionTitileColorTwo}</strong>}
                    </h3>
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {sectionBodyDescriptionsData?.map((data, index) => {
                            return (
                                <motion.p
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 * index }}
                                >
                                    {data?.paragraph}
                                </motion.p>
                            )
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default SectionBodyRight;
