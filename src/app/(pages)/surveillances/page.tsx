import { surveillancesBodyFirst, surveillancesBodySecond, surveillancesBodyThird, surveillancesData } from "@/allData/surveillancesData";
import BannerImg from "@/components/common/Banner/BannerImg";
import SectionBodyConcepts from "@/components/common/Section/SectionBodyConcepts";
import SectionBodyLeft from "@/components/common/Section/SectionBodyLeft";
import SectionBodyRight from "@/components/common/Section/SectionBodyRight";

const Surveillances = () => {
    const imageBg = '/img/bg/banner-surveillances.jpg';
    const bannerTitle = "Be Aware. Anywhere.";
    const bannerDescription = 'keep a tab on your home, even while you’re away in the office or a vacation. With intelligent CCTV cameras that provide round-the-clock monitoring, staying connected with what matters is easy. The surveillance cameras can be installed standalone or can be configured to secure a covered area.';
    return (
        <main>
            <BannerImg imageBg={imageBg} bannerTitle={bannerTitle} bannerDescription={bannerDescription} />
            <section className='py-20'>
                <SectionBodyConcepts sectionTitle='24x7 Uninterrupted Surveillance' sectionBodyContentsData={surveillancesData} sectionImage="/img/surveillances/camera.jpg" />
            </section>
            <section className='py-20 bg-[#2196f3] text-white'>
                <SectionBodyRight sectionBodyDescriptionsData={surveillancesBodyFirst} sectionTitleOne="Secure your main door areas" sectionTitileColorOne=" " sectionTitleTwo="" sectionTitileColorTwo="" sectionImage="/img/surveillances/smart-door-locks.jpg" />
            </section>
            <section className='py-20'>
                <SectionBodyLeft sectionBodyDescriptionsData={surveillancesBodySecond} sectionTitleOne="Monitor every movement" sectionTitileColorOne=" " sectionTitleTwo="" sectionTitileColorTwo="" sectionImage="/img/surveillances/monitor.jpg" />
            </section>
            <section className='py-20 bg-[#2196f3] text-white'>
                <SectionBodyRight sectionBodyDescriptionsData={surveillancesBodyThird} sectionTitleOne="Safety at any time of the day" sectionTitileColorOne=" " sectionTitleTwo="" sectionTitileColorTwo="" sectionImage="/img/surveillances/safety.jpg" />
            </section>
        </main>
    );
};

export default Surveillances;