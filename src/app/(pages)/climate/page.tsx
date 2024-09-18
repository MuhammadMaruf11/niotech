import { climateBodyFifth, climateBodyThird, climateData } from "@/allData/climateData";
import BannerImg from "@/components/common/Banner/BannerImg";
import SectionBodyConcepts from "@/components/common/Section/SectionBodyConcepts";
import SectionBodyLeft from "@/components/common/Section/SectionBodyLeft";
import SectionBodyRight from "@/components/common/Section/SectionBodyRight";


const page = () => {
    const imageBg = '/img/bg/banner-climate.jpg';
    const bannerTitle = "Experience ultimate comfort.";
    const bannerDescription = 'Keep track of ambient temperature across corners and automatically send commands to your central cooling unit to facilitate optimum cooling. Intelligently save energy by automatically turning off AC/cooling system if a window/door is left open for too long.';
    return (
        <main>
            <BannerImg imageBg={imageBg} bannerTitle={bannerTitle} bannerDescription={bannerDescription} />
            <section className='py-20'>
                <SectionBodyConcepts sectionTitle='Smart Climate Control for Perfect Living' sectionBodyContentsData={climateData} sectionImage="/img/climate/perfectliving.jpg" />
            </section>
            <section className='py-20 bg-theme text-white'>
                <SectionBodyRight sectionBodyDescriptionsData={climateBodyFifth} sectionTitleOne="Set the perfect home conditions" sectionTitileColorOne=" " sectionTitleTwo="" sectionTitileColorTwo="" sectionImage="/img/climate/thermostate.png" />
            </section>
            <section className='py-20'>
                <SectionBodyLeft sectionBodyDescriptionsData={climateBodyThird} sectionTitleOne="Learn Usage Patterns " sectionTitileColorOne=" " sectionTitleTwo="" sectionTitileColorTwo="" sectionImage="/img/climate/useagepatterns.jpg" />
            </section>
        </main>
    );
};

export default page;