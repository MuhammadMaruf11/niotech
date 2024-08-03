import { camerasNavData, camerasTabData, doorLocksNavData, doorLocksTabData, environmentalSensorsNavData, environmentalSensorsTabData, homeSecurityBodyFirst, homeSecurityBodySecond, homeSecurityBodyThird, homeSecurityData, securitySensorsNavData, securitySensorsTabData } from '@/allData/homeSecurityData';
import BannerImg from '@/components/common/Banner/BannerImg';
import SectionBodyConcepts from '@/components/common/Section/SectionBodyConcepts';
import SectionBodyLeft from '@/components/common/Section/SectionBodyLeft';
import SectionBodyRight from '@/components/common/Section/SectionBodyRight';
import SectionTabNav from '@/components/common/Section/SectionTabNav';
import InsideSecuritySystem from '@/components/InsideSecuritySystem/InsideSecuritySystem';
import React from 'react';

const HomeSecurity = () => {
    const imageBg = '/img/bg/banner-home-security.jpg';
    const bannerTitle = "Take Your Home With You";
    const bannerDescription = 'Protect your home from intruders. Keep a tab on visitors. Lock and unlock your doors from anywhere. Get instant notifications on your smartphone and trigger a loud alarm, if someone tries to break into your home.';
    return (
        <main>
            <BannerImg imageBg={imageBg} bannerTitle={bannerTitle} bannerDescription={bannerDescription} />
            <InsideSecuritySystem />
            <section className='py-20 bg-[#2196f3] text-white'>
                <SectionBodyRight sectionBodyDescriptionsData={homeSecurityBodyFirst} sectionTitleOne="What is Home Security System?" sectionTitileColorOne=" " sectionTitleTwo="" sectionTitileColorTwo="" sectionImage="/img/home-security/Smart-Home-Owners.png" />
            </section>
            <section className='pt-16 bg-[#f8f5ff]'>
                <SectionTabNav sectionMainTitle='The Anatomy of a Home Security System.' sectionSubTitle='Cameras' sectionNavData={camerasNavData} sectionTabData={camerasTabData} />
            </section>
            <section className='pt-16 bg-[#f8f5ff]'>
                <SectionTabNav sectionMainTitle='' sectionSubTitle='Security Sensors' sectionNavData={securitySensorsNavData} sectionTabData={securitySensorsTabData} />
            </section>
            <section className='pt-16 bg-[#f8f5ff]'>
                <SectionTabNav sectionMainTitle='' sectionSubTitle='Environmental Sensors' sectionNavData={environmentalSensorsNavData} sectionTabData={environmentalSensorsTabData} />
            </section>
            <section className='pt-16 bg-[#f8f5ff]'>
                <SectionTabNav sectionMainTitle='' sectionSubTitle='Doors & Locks' sectionNavData={doorLocksNavData} sectionTabData={doorLocksTabData} />
            </section>
            <section className='py-20'>
                <SectionBodyConcepts sectionTitle='Easy Control and Monitoring. Instant Alerts – Anywhere, Anytime' sectionBodyContentsData={homeSecurityData} sectionImage="/img/home-security/output_8vMspw-1.gif" />
            </section>
            <section className='py-20'>
                <SectionBodyRight sectionBodyDescriptionsData={homeSecurityBodySecond} sectionTitleOne="Always stay informed about visitors at yourdoor" sectionTitileColorOne=" " sectionTitleTwo="" sectionTitileColorTwo="" sectionImage="/img/home-security/Answer-Your-Door-From-Your-Smartphone-with-SkyBell-565x240.jpg" />
            </section>
            <section className='py-20'>
                <SectionBodyLeft sectionBodyDescriptionsData={homeSecurityBodyThird} sectionTitleOne="Do I Need a Home Security System?" sectionTitileColorOne=" " sectionTitleTwo="" sectionTitileColorTwo="" sectionImage="/img/home-security/mother-playing-with-daughter.png" />
            </section>
        </main>
    );
};

export default HomeSecurity;