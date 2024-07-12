import BannerImg from '@/components/common/Banner/BannerImg';
import TermsAndCondition from '@/components/TermsAndCondition/TermsAndCondition';

const TermsCondition = () => {
    const imageBg = '/img/bg/banner-term-condition.jpg';
    const bannerTitle = "CORPORATE POLICY";
    const bannerDescription = 'NIOTECH SMART';

    return (
        <main>
            <BannerImg imageBg={imageBg} bannerTitle={bannerTitle} bannerDescription={bannerDescription} />
            <TermsAndCondition />
        </main>
    );
};

export default TermsCondition;