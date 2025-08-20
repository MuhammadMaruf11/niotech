'use client'
import { motion } from 'framer-motion';
import { serviceTabData } from '@/allData/serviceTabData';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Consultancy from './Consultancy';
import Design from './Design';
import Installation from './Installation';
import Programming from './Programming';
import Support from './Support';
import SmartCare from './SmartCare';
import { FC } from 'react';
import { ServiceDesignDataType } from '@/type';

const panelVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
};



interface serviceDesignProps{
    serviceDesignData: ServiceDesignDataType[]
    serviceTabData:ServiceDesignDataType[]
}

const ServicesNavTab: FC<serviceDesignProps> = ({ serviceDesignData, serviceTabData }) => {
    return (
        <section className='py-20'>
            <div className="max-w-screen-xl px-3 mx-auto">
                <Tabs className='grid grid-cols-12 gap-6'>
                    <TabList className="flex lg:flex-col md:flex-row lg:mx-0 mx-0 md:mx-auto flex-col lg:col-span-3 col-span-12">
                        {serviceTabData.map((data, index) => (
                            <Tab key={index} className="lg:p-3.5 p-2 hover:bg-gray-100 transition-all duration-300 ease-linear cursor-pointer border border-gray-300 rounded-md hover:text-gray-700">
                                {data.title}
                            </Tab>
                        ))}
                    </TabList>

                    <div className="lg:col-span-9 col-span-12">
                        <TabPanel>
                            <motion.div
                                variants={panelVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <Consultancy />
                            </motion.div>
                        </TabPanel>

                        <TabPanel>
                            <motion.div
                                variants={panelVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <Design serviceDesignData={serviceDesignData} />
                            </motion.div>
                        </TabPanel>

                        <TabPanel>
                            <motion.div
                                variants={panelVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <Installation />
                            </motion.div>
                        </TabPanel>

                        <TabPanel>
                            <motion.div
                                variants={panelVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <Programming />
                            </motion.div>
                        </TabPanel>

                        <TabPanel>
                            <motion.div
                                variants={panelVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <Support />
                            </motion.div>
                        </TabPanel>

                        <TabPanel>
                            <motion.div
                                variants={panelVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <SmartCare />
                            </motion.div>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </section>
    );
};

export default ServicesNavTab;
