import BannerImg from '@/components/common/Banner/BannerImg';
import ServicesNavTab from '@/components/ServicesComp/ServicesNavTab';
import { SITE_URL } from '@/config/siteConfig';
import React from 'react';

const Services = async () => {


    const designres = await fetch(`${SITE_URL}/api/design-list`, {
        cache:"no-store"
    })

    const { serviceDesignData } = await designres.json()


    const serviceres = await fetch(`${SITE_URL}/api/service-list`, {
        cache:"no-store"
    })

    const { serviceTabData } = await serviceres.json()


    const imageBg = '/img/bg/banner-services.jpg';
    const bannerTitle = 'SERVICES';
    const bannerDescription = ' ';

    return (
        <main>
            <BannerImg imageBg={imageBg} bannerTitle={bannerTitle} bannerDescription={bannerDescription} />
            <ServicesNavTab serviceDesignData={serviceDesignData} serviceTabData={serviceTabData} />
        </main>
    );
};

export default Services;