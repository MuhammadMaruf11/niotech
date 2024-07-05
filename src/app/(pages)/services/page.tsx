import BannerImg from '@/components/common/Banner/BannerImg';
import ServicesNavTab from '@/components/ServicesComp/ServicesNavTab';
import React from 'react';

const Services = () => {
    const imageBg = '/img/bg/banner-services.jpg';
    const bannerTitle = 'SERVICES';
    const bannerDescription = ' ';

    return (
        <main>
            <BannerImg imageBg={imageBg} bannerTitle={bannerTitle} bannerDescription={bannerDescription} />
            <ServicesNavTab />
        </main>
    );
};

export default Services;