import BannerImg from '@/components/common/Banner/BannerImg';
import React from 'react';

const HomeSecurity = () => {
    const imageBg = '/img/bg/banner-home-security.jpg';
    const bannerTitle = "Take Your Home With You";
    const bannerDescription = 'Protect your home from intruders. Keep a tab on visitors. Lock and unlock your doors from anywhere. Get instant notifications on your smartphone and trigger a loud alarm, if someone tries to break into your home.';
    return (
        <main>
            <BannerImg imageBg={imageBg} bannerTitle={bannerTitle} bannerDescription={bannerDescription} />
        </main>
    );
};

export default HomeSecurity;