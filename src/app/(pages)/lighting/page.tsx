import { lightingBodyFourth, lightingBodyThird } from '@/allData/lightingPageData';
import BannerImg from '@/components/common/Banner/BannerImg';
import SectionBodyLeft from '@/components/common/Section/SectionBodyLeft';
import SectionBodyRight from '@/components/common/Section/SectionBodyRight';
import Ambience from '@/components/LightingComp/Ambience';
import CountMeter from '@/components/LightingComp/CountMeter';

const page = () => {
    const imageBg = '/img/bg/banner-lighting.jpg';
    const bannerTitle = "Control Your Lights, Your Way.";
    const bannerDescription = 'Discover a smarter way to control your lights. Spin the wheel to change colours. Set schedules to turn them on/off. Control them from your smartphone while you’re away. And all this… without the hassle of internal wiring.';

    return (
        <main>
            <BannerImg imageBg={imageBg} bannerTitle={bannerTitle} bannerDescription={bannerDescription} />
            <section className='py-20 bg-black text-white'>
                <Ambience />
            </section>
            <section className='py-20 bg-black text-white'>
                <CountMeter />
            </section>
            <section className='py-20 bg-black text-white'>
                <SectionBodyRight sectionBodyDescriptionsData={lightingBodyThird} sectionTitleOne="Control From Your Smartphone" sectionTitileColorOne=" " sectionTitleTwo="" sectionTitileColorTwo="" sectionImage="/img/lighting/calls.jpg" />
            </section>
            <section className='py-20 bg-black text-white'>
                <SectionBodyLeft sectionBodyDescriptionsData={lightingBodyFourth} sectionTitleOne="Create the Perfect Mood" sectionTitileColorOne="" sectionTitleTwo="" sectionTitileColorTwo="" sectionImage="/img/lighting/perfectmode.jpg" />
            </section>
        </main>
    );
};

export default page;