import BannerImg from '@/components/common/Banner/BannerImg';
import SectionBodyConcepts from '@/components/common/Section/SectionBodyConcepts';
import SectionBodyLeft from '@/components/common/Section/SectionBodyLeft';
import SectionBodyRight from '@/components/common/Section/SectionBodyRight';
import CountMeter from '@/components/LightingComp/CountMeter';
import { SITE_URL } from '@/config/siteConfig';

async function fetchData(endpoint: string) {
    const res = await fetch(`${SITE_URL}/api/${endpoint}`, { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
    return res.json();
}

const page = async () => {

    const [
        { lightingBodyFourth, lightingBodyThird },
        { ambienceData },
        { countMeterData },
    ] = await Promise.all([
        fetchData("lighting"),
        fetchData("ambience"),
        fetchData("count-meter"),
    ]);

    const imageBg = '/img/bg/banner-lighting.jpg';
    const bannerTitle = "Control Your Lights, Your Way.";
    const bannerDescription = 'Discover a smarter way to control your lights. Spin the wheel to change colours. Set schedules to turn them on/off. Control them from your smartphone while you’re away. And all this… without the hassle of internal wiring.';

    return (
        <main>
            <BannerImg imageBg={imageBg} bannerTitle={bannerTitle} bannerDescription={bannerDescription} />
            <section className='py-20 bg-black text-white'>
                <SectionBodyConcepts sectionTitle='Create Your Own Ambience' sectionBodyContentsData={ambienceData} sectionImage="/img/lighting/ambience.jpg" />
            </section>
            <section className='py-20 bg-black text-white'>
                <CountMeter countMeterData={countMeterData} />
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