import { energyEfficiencyBodyFifth, energyEfficiencyBodyFourth, energyEfficiencyBodyThird, energyEfficiencyData } from "@/allData/energyEfficiencyData";
import BannerImg from "@/components/common/Banner/BannerImg";
import SectionBodyConcepts from "@/components/common/Section/SectionBodyConcepts";
import SectionBodyLeft from "@/components/common/Section/SectionBodyLeft";
import SectionBodyRight from "@/components/common/Section/SectionBodyRight";


const EnergyEfficiency = () => {
    const imageBg = '/img/bg/banner-energy-efficiency.jpg';
    const bannerTitle = "Discover a Smarter Way to Save Energy.";
    const bannerDescription = 'Use the power of technology to intelligently save money. Automatically turn off your air-conditioner, lights and fans when you’re not home. Get detailed insights into how much energy you’re consuming. Create personalized schedules to optimize energy consumption and comfort.';
    return (
        <main>
            <BannerImg imageBg={imageBg} bannerTitle={bannerTitle} bannerDescription={bannerDescription} />
            <section className='py-20'>
                <SectionBodyConcepts sectionTitle='Energy Management turns Simpler' sectionBodyContentsData={energyEfficiencyData} sectionImage="/img/energy-efficiency/discovermanagement.jpg" />
            </section>
            <section className='py-20 bg-theme text-white'>
                <SectionBodyRight sectionBodyDescriptionsData={energyEfficiencyBodyFifth} sectionTitleOne="Detailed Analysis for Energy Usage" sectionTitileColorOne=" " sectionTitleTwo="" sectionTitileColorTwo="" sectionImage="/img/energy-efficiency/detailedanalysis.png" />
            </section>
            <section className='py-20'>
                <SectionBodyLeft sectionBodyDescriptionsData={energyEfficiencyBodyThird} sectionTitleOne="Scheduling of events " sectionTitileColorOne=" " sectionTitleTwo="" sectionTitileColorTwo="" sectionImage="/img/energy-efficiency/events.png" />
            </section>
            <section className='py-20'>
                <SectionBodyRight sectionBodyDescriptionsData={energyEfficiencyBodyFourth} sectionTitleOne="Learning Usage Patterns " sectionTitileColorOne=" " sectionTitleTwo="  " sectionTitileColorTwo="" sectionImage="/img/energy-efficiency/learningusages.jpg" />
            </section>
        </main>
    );
};

export default EnergyEfficiency;