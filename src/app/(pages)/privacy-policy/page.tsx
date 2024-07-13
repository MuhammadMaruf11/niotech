import BannerImg from '@/components/common/Banner/BannerImg';
import PrivacyPolicyComp from '@/components/PrivacyPolicyComp/PrivacyPolicyComp';
import React from 'react';

const PrivacyPolicy = () => {
    const imageBg = '/img/bg/banner-privacy-policy.jpg';
    const bannerTitle = "PRIVACY POLICY";
    const bannerDescription = 'NIOTECH SMART';

    return (
        <main>
            <BannerImg imageBg={imageBg} bannerTitle={bannerTitle} bannerDescription={bannerDescription} />
            <PrivacyPolicyComp />
        </main>
    );
};

export default PrivacyPolicy;