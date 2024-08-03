'use client'
/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

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
            {sectionMainTitle && <h2 className='text-center mb-12 text-4xl font-medium'>
                {sectionMainTitle}
            </h2>}
            {sectionSubTitle && <h3 className='text-center mb-4 text-3xl font-normal text-[#333]'>
                {sectionSubTitle}
            </h3>}
            <Tabs className=''>
                {sectionNavData &&
                    <TabList className="flex justify-center mb-4">
                        {sectionNavData.map((data, index) => (
                            <Tab key={index} className="lg:py-2 lg:px-12 p-2 hover:bg-gray-100 transition-all duration-300 ease-linear cursor-pointer border border-gray-300 rounded-md hover:text-gray-700">
                                {data?.title}
                            </Tab>
                        ))}
                    </TabList>
                }

                <div className="bg-[#f2f2f2]">
                    {sectionTabData?.map((data, index) => {
                        return (<TabPanel key={index}>
                            <div className=''>
                                <div className="grid lg:grid-cols-2 gap-6 items-center">
                                    <div className="lg:ps-4 lg:pe-16">
                                        <h4 className='mb-8'>
                                            {data?.sectionTabTitle && data?.sectionTabTitle}
                                        </h4>
                                        <div className="space-y-4">
                                            {data?.sectionBodyDescriptionsData?.map((data, index) => {
                                                return (
                                                    <p key={index}>
                                                        {data?.paragraph}
                                                    </p>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div>
                                        <img className='mx-auto max-w-[600px]' loading="lazy" src={data?.sectionTabImage} alt="section_left_side" />
                                    </div>
                                </div>
                            </div>
                        </TabPanel>)
                    })}

                </div>

            </Tabs>
        </div>
    );
};

export default SectionTabNav;