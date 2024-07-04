import { officeBodyFifth, officeBodyFirst, officeBodyFourth, officeBodySecond, officeBodySixth, officeBodyThird, officeHeadingFirst, officeHeadingSecond } from '@/allData/officePageData';
import BannerImg from '@/components/common/Banner/BannerImg';
import SectionBodyLeft from '@/components/common/Section/SectionBodyLeft';
import SectionBodyRight from '@/components/common/Section/SectionBodyRight';
import SectionHeading from '@/components/common/Section/SectionHeading';
import React from 'react';

const Office = () => {
    const imageBg = '/img/bg/banner-office.jpg';
    const bannerTitle = 'Building the future of homes';
    const bannerDescription = 'Eliminate manual interactions. Reduce energy footprint. Deploy proactive security measures. The future of residential and commercial spaces is here.';


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
                <SectionBodyRight sectionBodyDescriptionsData={officeBodyThird} sectionTitleOne="Get notified before " sectionTitileColorOne="intrusion " sectionTitleTwo="happens. " sectionTitileColorTwo="" sectionImage="/img/building/Fibaro_Motion_Recognition.jpg" />
            </section>
            <section className='py-12'>
                <SectionBodyRight sectionBodyDescriptionsData={officeBodyFourth} sectionTitleOne="Trigger smart " sectionTitileColorOne="fire/smoke " sectionTitleTwo="alarms. " sectionTitileColorTwo="" sectionImage="/img/building/fire-sensors.jpg" />
            </section>
            <section className='py-12'>
                <SectionBodyLeft sectionBodyDescriptionsData={officeBodyFifth} sectionTitleOne="Automate " sectionTitileColorOne="water " sectionTitleTwo="management.  " sectionTitileColorTwo="" sectionImage="/img/building/Shower-Head-Wireless-Speakers.jpg" />
            </section>
            <section className='py-12'>
                <SectionBodyRight sectionBodyDescriptionsData={officeBodySixth} sectionTitleOne="Keep an " sectionTitileColorOne="eye " sectionTitleTwo="on every floor. " sectionTitileColorTwo="" sectionImage="/img/building/Surveillance-camera.jpg" />
            </section>
        </main>
    );
};

export default Office;