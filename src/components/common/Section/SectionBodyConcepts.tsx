/* eslint-disable @next/next/no-img-element */
"use client";
import { FC } from "react";
import { motion } from 'framer-motion';

interface SectionBody {
    icon: string;
    title: string;
    description: string;
}

interface sectionProps {
    sectionTitle: string;
    sectionImage: string;
    sectionBodyContentsData?: SectionBody[];
}

const SectionBodyConcepts: FC<sectionProps> = ({ sectionTitle, sectionImage, sectionBodyContentsData }) => {
    return (
        <div className='container mx-auto max-w-screen-xl px-3'>
            <div className="grid lg:grid-cols-2 gap-6">
                <div>
                    <motion.h3
                        className='mb-10'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {sectionTitle && sectionTitle}
                    </motion.h3>
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {sectionBodyContentsData?.map((data, index) => {
                            const { icon, title, description } = data;
                            return (
                                <motion.div
                                    key={index}
                                    className="flex gap-6"
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                >
                                    <div className="pt-1.5 min-w-10">
                                        <i className={`${icon} text-3xl`}></i>
                                    </div>
                                    <div>
                                        <motion.h6
                                            className="font-medium mb-2"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {title}
                                        </motion.h6>
                                        <motion.p
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {description}
                                        </motion.p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <img className='mx-auto' loading="lazy" src={sectionImage} alt="section_body" />
                </motion.div>
            </div>
        </div>
    );
};

export default SectionBodyConcepts;
