'use client'
import { serviceTabData } from '@/allData/serviceTabData';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Consultancy from './Consultancy';
import Design from './Design';

const ServicesNavTab = () => {


    return (
        <section className='py-20'>
            <div className="max-w-screen-xl px-3 mx-auto">
                <Tabs className='grid grid-cols-12 gap-6'>
                    <TabList className="flex flex-col col-span-3">
                        {serviceTabData.map((data, index) => (
                            <Tab key={index} className="p-3.5 hover:bg-gray-100 transition-all duration-300 ease-linear cursor-pointer border border-gray-300 rounded-md hover:text-gray-700">
                                {data.title}
                            </Tab>
                        ))}
                    </TabList>


                    <div className="col-span-9">
                        <TabPanel >
                            <Consultancy />
                        </TabPanel>

                        <TabPanel >
                            <Design />
                        </TabPanel>

                        <TabPanel >

                        </TabPanel>

                        <TabPanel >

                        </TabPanel>

                        <TabPanel >

                        </TabPanel>

                        <TabPanel >

                        </TabPanel>
                    </div>

                </Tabs>
            </div>
        </section>
    );
};

export default ServicesNavTab;