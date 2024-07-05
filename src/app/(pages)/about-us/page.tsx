import BannerImg from '@/components/common/Banner/BannerImg';
import OurThoughts from '@/components/OurThoughts/OurThoughts';
import WeBelieve from '@/components/WeBelieve/WeBelieve';
import React from 'react';

const AboutUs = () => {
    const imageBg = '/img/bg/banner-about-us.jpg';
    const bannerTitle = 'ABOUT US';
    const bannerDescription = 'NIOTECH SMART';

    return (
        <main>
            <BannerImg imageBg={imageBg} bannerTitle={bannerTitle} bannerDescription={bannerDescription} />
            <OurThoughts />
            <WeBelieve />
        </main>
    );
};

export default AboutUs;