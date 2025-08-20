import BannerImg from '@/components/common/Banner/BannerImg';
import SectionBodyLeft from '@/components/common/Section/SectionBodyLeft';
import SectionBodyRight from '@/components/common/Section/SectionBodyRight';
import SectionHeading from '@/components/common/Section/SectionHeading';
import { SITE_URL } from '@/config/siteConfig';
import React from 'react';

const Office = async () => {

       const res = await fetch(`${SITE_URL}/api/office`, {
                    cache: 'no-store'
                })
            
        const data = await res.json();
    const { officeBodyFifth, officeBodyFirst, officeBodyFourth, officeBodySecond, officeBodySixth, officeBodyThird, officeHeadingFirst, officeHeadingSecond } = data;

    const imageBg = '/img/bg/banner-office.jpg';
    const bannerTitle = 'Build the geekiest workplace.';
    const bannerDescription = 'Exclusively for startups and businesses, looking to make a bold statement.';


    return (
        <main>
            <BannerImg imageBg={imageBg} bannerTitle={bannerTitle} bannerDescription={bannerDescription} />
            <SectionHeading
                sectionTitleOne={`What’s Office `}
                sectionTitleColorOne={`Automation ?`}
                sectionTitleTwo={``}
                sectionTitleColorTwo={``}
                sectionDescriptionsData={officeHeadingFirst}
            />
            <section className='py-12'>
                <SectionBodyLeft sectionBodyDescriptionsData={officeBodyFirst} sectionTitleOne="Not a " sectionTitileColorOne="building, " sectionTitleTwo="but a " sectionTitileColorTwo="lifestyle. " sectionImage="/img/building/buildinglifestyle.jpg" />
            </section>
            <SectionHeading
                sectionTitleOne={`Automation can give your `}
                sectionTitleColorOne={`office `}
                sectionTitleTwo={`an unparalleled competitive `}
                sectionTitleColorTwo={`edge.`}
                sectionDescriptionsData={officeHeadingSecond}
            />
            <section className='py-12'>
                <SectionBodyLeft sectionBodyDescriptionsData={officeBodySecond} sectionTitleOne="Make your " sectionTitileColorOne="presentation " sectionTitleTwo="stand out." sectionTitileColorTwo="" sectionImage="/img/office/presentation.jpg" />
            </section>
            <section className='py-12'>
                <SectionBodyRight sectionBodyDescriptionsData={officeBodyThird} sectionTitleOne="Order " sectionTitileColorOne="coffee " sectionTitleTwo="from your desk." sectionTitileColorTwo="" sectionImage="/img/office/coffee-machines-img.jpg" />
            </section>
            <section className='py-12'>
                <SectionBodyLeft sectionBodyDescriptionsData={officeBodyFourth} sectionTitleOne="Automate " sectionTitileColorOne="climate " sectionTitleTwo="control.  " sectionTitileColorTwo="Just like that." sectionImage="/img/office/climate.jpg" />
            </section>
            <section className='py-12'>
                <SectionBodyRight sectionBodyDescriptionsData={officeBodyFifth} sectionTitleOne="Monitor " sectionTitileColorOne="workforce. " sectionTitleTwo="From anywhere." sectionTitileColorTwo="" sectionImage="/img/office/monitor.jpg" />
            </section>
            <section className='py-12'>
                <SectionBodyLeft sectionBodyDescriptionsData={officeBodySixth} sectionTitleOne="Protect your " sectionTitileColorOne="employees." sectionTitleTwo="" sectionTitileColorTwo="" sectionImage="/img/office/employeesensor.jpg" />
            </section>
            <section className='py-12'>
                <SectionBodyRight sectionBodyDescriptionsData={officeBodyFirst} sectionTitleOne="Save energy with " sectionTitileColorOne="intelligent " sectionTitleTwo="sensing. " sectionTitileColorTwo="" sectionImage="/img/office/energy.jpg" />
            </section>
        </main>
    );
};

export default Office;