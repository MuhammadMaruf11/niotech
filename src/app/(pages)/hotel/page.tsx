import BannerImg from '@/components/common/Banner/BannerImg';
import SectionBodyLeft from '@/components/common/Section/SectionBodyLeft';
import SectionBodyRight from '@/components/common/Section/SectionBodyRight';
import SectionHeading from '@/components/common/Section/SectionHeading';
import { SITE_URL } from '@/config/siteConfig';
import React from 'react';

const hotel = async () => {

    const res = await fetch(`${SITE_URL}/api/hotel`, {
        cache:'no-store'
    })

    const data = await res.json();
    const { hotelBodyFifth, hotelBodyFirst, hotelBodyFourth, hotelBodySecond, hotelBodySixth, hotelBodyThird, hotelHeadingFirst, hotelHeadingSecond } = data;

    const imageBg = '/img/bg/banner-hotel.png';
    const bannerTitle = 'Delight your customers.';
    const bannerDescription = 'Create mood lighting. Save energy with intelligent sensing. Unlock doors and open curtains from a touch-screen interface. Welcome to the future of hotels. ';


    return (
        <main>
            <BannerImg imageBg={imageBg} bannerTitle={bannerTitle} bannerDescription={bannerDescription} />
            <SectionHeading
                sectionTitleOne={`What’s Hotel `}
                sectionTitleColorOne={`Automation ?`}
                sectionTitleTwo={``}
                sectionTitleColorTwo={``}
                sectionDescriptionsData={hotelHeadingFirst}
            />
            <SectionHeading
                sectionTitleOne={`Add an extra ⭐️ to your `}
                sectionTitleColorOne={`hotel experience ?`}
                sectionTitleTwo={` `}
                sectionTitleColorTwo={`.`}
                sectionDescriptionsData={hotelHeadingSecond}
            />
            <section className='py-12'>
                <SectionBodyLeft sectionBodyDescriptionsData={hotelBodyFirst} sectionTitleOne="Match every " sectionTitileColorOne="mood. " sectionTitleTwo="Every " sectionTitileColorTwo="emotion. " sectionImage="/img/hotel/emotion.jpg" />
            </section>
            <section className='py-12'>
                <SectionBodyRight sectionBodyDescriptionsData={hotelBodyThird} sectionTitleOne="Control " sectionTitileColorOne="multimedia " sectionTitleTwo="at your fingertips" sectionTitileColorTwo="" sectionImage="/img/hotel/fingerprint.jpg" />
            </section>
            <section className='py-12'>
                <SectionBodyLeft sectionBodyDescriptionsData={hotelBodySecond} sectionTitleOne="Go  " sectionTitileColorOne="keyless " sectionTitleTwo="with advanced " sectionTitileColorTwo="access control" sectionImage="/img/hotel/keyless.jpg" />
            </section>
            <section className='py-12'>
                <SectionBodyRight sectionBodyDescriptionsData={hotelBodyFifth} sectionTitleOne="Setup " sectionTitileColorOne="Free/Paid " sectionTitleTwo="Wi-Fi Service for " sectionTitileColorTwo="customers" sectionImage="/img/hotel/freepaind.jpg" />
            </section>
            <section className='py-12'>
                <SectionBodyLeft sectionBodyDescriptionsData={hotelBodyFourth} sectionTitleOne="Automate " sectionTitileColorOne="climate " sectionTitleTwo="control.  " sectionTitileColorTwo="Just like that." sectionImage="/img/hotel/climate.jpg" />
            </section>
            <section className='py-12'>
                <SectionBodyRight sectionBodyDescriptionsData={hotelBodySixth} sectionTitleOne="Save energy with " sectionTitileColorOne="intelligent " sectionTitleTwo="sensing." sectionTitileColorTwo="" sectionImage="/img/hotel/energy.jpg" />
            </section>
        </main>
    );
};

export default hotel;