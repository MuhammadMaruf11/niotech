'use client';
import { FC } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { motion } from "framer-motion";
import Image from "next/image";

interface SectionDescription {
    paragraph: string;
}

interface sectionNavTitle {
    title: string;
}

interface sectionTabContent {
    sectionTabTitle: string;
    sectionTabImage: string;
    sectionBodyDescriptionsData?: SectionDescription[];
}

interface sectionProps {
    sectionMainTitle: string;
    sectionSubTitle: string;
    sectionNavData?: sectionNavTitle[];
    sectionTabData?: sectionTabContent[];
}

const SectionTabNav: FC<sectionProps> = ({ sectionMainTitle, sectionSubTitle, sectionNavData, sectionTabData }) => {
    return (
        <div className="px-3">
            {sectionMainTitle && (
                <motion.h2
                    className='text-center mb-12 text-4xl font-medium'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {sectionMainTitle}
                </motion.h2>
            )}
            {sectionSubTitle && (
                <motion.h3
                    className='text-center mb-4 text-3xl font-normal text-[#333]'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                    {sectionSubTitle}
                </motion.h3>
            )}
            <Tabs className=''>
                {sectionNavData && (
                    <TabList className="flex justify-center mb-4">
                        {sectionNavData.map((data, index) => (
                            <Tab key={index}>
                                <motion.div
                                    className="lg:py-2 lg:px-12 p-2 hover:bg-gray-100 transition-all duration-300 ease-linear cursor-pointer border border-gray-300 rounded-md hover:text-gray-700"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.4, delay: 0.1 * index }}
                                >
                                    {data?.title}
                                </motion.div>
                            </Tab>
                        ))}
                    </TabList>
                )}

                <div className="bg-[#f2f2f2]">
                    {sectionTabData?.map((data, index) => (
                        <TabPanel key={index}>
                            <motion.div
                                className='grid lg:grid-cols-2 gap-6 items-center'
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="lg:ps-4 lg:pe-16">
                                    <motion.h4
                                        className='mb-8'
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {data?.sectionTabTitle && data?.sectionTabTitle}
                                    </motion.h4>
                                    <div className="space-y-4">
                                        {data?.sectionBodyDescriptionsData?.map((data, index) => (
                                            <motion.p
                                                key={index}
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                            >
                                                {data?.paragraph}
                                            </motion.p>
                                        ))}
                                    </div>
                                </div>
                                <motion.div
                                    className='mx-auto'
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Image width={600} height={0} src={data?.sectionTabImage} alt="section_tab_image" />
                                </motion.div>
                            </motion.div>
                        </TabPanel>
                    ))}
                </div>
            </Tabs>
        </div>
    );
};

export default SectionTabNav;
