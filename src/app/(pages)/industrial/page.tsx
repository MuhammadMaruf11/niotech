import BannerImg from '@/components/common/Banner/BannerImg';
import SectionBodyLeft from '@/components/common/Section/SectionBodyLeft';
import SectionBodyRight from '@/components/common/Section/SectionBodyRight';
import SectionHeading from '@/components/common/Section/SectionHeading';
import { SITE_URL } from '@/config/siteConfig';
import React from 'react';

const Industrial = async () => {

       const res = await fetch(`${SITE_URL}/api/industrial`, {
            cache:'no-store'
        })
    
    const data = await res.json();
    
    const { industrialBodyFifth, industrialBodyFirst, industrialBodyFourth, industrialBodySecond, industrialBodySixth, industrialBodyThird, industrialHeadingFirst, industrialHeadingSecond } = data;


    const imageBg = '/img/bg/banner-industrial.jpg';
    const bannerTitle = 'The Fourth Industrial Revolution has begun.';
    const bannerDescription = '';


    return (
        <main>
            <BannerImg imageBg={imageBg} bannerTitle={bannerTitle} bannerDescription={bannerDescription} />
            <SectionHeading
                sectionTitleOne={`What’s Industrial  `}
                sectionTitleColorOne={`Automation ?`}
                sectionTitleTwo={``}
                sectionTitleColorTwo={``}
                sectionDescriptionsData={industrialHeadingFirst}
            />
            <SectionHeading
                sectionTitleOne={``}
                sectionTitleColorOne={`Automation `}
                sectionTitleTwo={`can multiply `}
                sectionTitleColorTwo={`productivity.`}
                sectionDescriptionsData={industrialHeadingSecond}
            />
            <section className='py-12'>
                <SectionBodyLeft sectionBodyDescriptionsData={industrialBodyFirst} sectionTitleOne="Track machinery " sectionTitileColorOne="movements " sectionTitleTwo="" sectionTitileColorTwo="" sectionImage="/img/industrial/Machinery-Industrial-Automation.jpg" />
            </section>
            <section className='py-12'>
                <SectionBodyRight sectionBodyDescriptionsData={industrialBodyThird} sectionTitleOne="Automate " sectionTitileColorOne="processes. " sectionTitleTwo="Streamline " sectionTitileColorTwo="workflow." sectionImage="/img/industrial/Process-Industrial-Automation.jpg" />
            </section>
            <section className='py-12'>
                <SectionBodyLeft sectionBodyDescriptionsData={industrialBodySecond} sectionTitleOne="Monitor " sectionTitileColorOne="production line " sectionTitleTwo="in real-time. " sectionTitileColorTwo="(IoT)" sectionImage="/img/industrial/Cayenne-Phone-Layout-fs8.png" />
            </section>
            <section className='py-12'>
                <SectionBodyRight sectionBodyDescriptionsData={industrialBodyFifth} sectionTitleOne="Get " sectionTitileColorOne="alerts " sectionTitleTwo="and " sectionTitileColorTwo="notifications." sectionImage="/img/industrial/Amazon-Echo-GMAIL-IFTTT-Smart-Home-Use-cases.jpg" />
            </section>
            <section className='py-12'>
                <SectionBodyLeft sectionBodyDescriptionsData={industrialBodyFourth} sectionTitleOne="Track your inventory with " sectionTitileColorOne="GPS " sectionTitleTwo="" sectionTitileColorTwo="monitoring." sectionImage="/img/industrial/Inventory-Industrial-Automation.jpg" />
            </section>
            <section className='py-12'>
                <SectionBodyRight sectionBodyDescriptionsData={industrialBodySixth} sectionTitleOne="Visualize your " sectionTitileColorOne="data. " sectionTitleTwo="Get better " sectionTitileColorTwo="insights." sectionImage="/img/industrial/Data-Industrial-Automation.jpg" />
            </section>
        </main>
    );
};

export default Industrial;