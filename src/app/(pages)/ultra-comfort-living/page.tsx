import { ultraComfortLivingBodyFifth, ultraComfortLivingBodyFirst, ultraComfortLivingBodyFourth, ultraComfortLivingBodySecond, ultraComfortLivingBodyThird } from "@/allData/ultraComfortLivingData";
import BannerImg from "@/components/common/Banner/BannerImg";
import SectionBodyLeft from "@/components/common/Section/SectionBodyLeft";
import SectionBodyRight from "@/components/common/Section/SectionBodyRight";


const UltraComfortLiving = () => {
    const imageBg = '/img/bg/banner-ultra-comfort-living.jpg';
    const bannerTitle = "Enjoy your Life!";
    const bannerDescription = 'keep a tab on your home, even while you’re away in the office or a vacation. With intelligent CCTV cameras that provide round-the-clock monitoring, staying connected with what matters is easy. The surveillance cameras can be installed standalone or can be configured to secure a covered area.';
    return (
        <main>
            <BannerImg imageBg={imageBg} bannerTitle={bannerTitle} bannerDescription={bannerDescription} />
            <section className='py-20 bg-[#2196f3] text-white'>
                <SectionBodyRight sectionBodyDescriptionsData={ultraComfortLivingBodyFirst} sectionTitleOne="Open/Close Shades from Your Smartphone" sectionTitileColorOne=" " sectionTitleTwo="" sectionTitileColorTwo="" sectionImage="/img/ultra-comfort-living/openorclose.jpg" />
            </section>
            <section className='py-20'>
                <SectionBodyLeft sectionBodyDescriptionsData={ultraComfortLivingBodySecond} sectionTitleOne="Make Irrigation Simple!" sectionTitileColorOne=" " sectionTitleTwo="" sectionTitileColorTwo="" sectionImage="/img/ultra-comfort-living/makesimple.jpg" />
            </section>
            <section className='py-20 bg-[#2196f3] text-white'>
                <SectionBodyRight sectionBodyDescriptionsData={ultraComfortLivingBodyFirst} sectionTitleOne="Manage Pool & Spa Anytime! Anywhere!!" sectionTitileColorOne=" " sectionTitleTwo="" sectionTitileColorTwo="" sectionImage="/img/ultra-comfort-living/managepool.jpg" />
            </section>
            <section className='py-20'>
                <SectionBodyLeft sectionBodyDescriptionsData={ultraComfortLivingBodyFourth} sectionTitleOne="Open Your Garage Door Easily!!" sectionTitileColorOne=" " sectionTitleTwo="" sectionTitileColorTwo="" sectionImage="/img/ultra-comfort-living/garagedoor.jpg" />
            </section>
            <section className='py-20 bg-[#2196f3] text-white'>
                <SectionBodyRight sectionBodyDescriptionsData={ultraComfortLivingBodyFifth} sectionTitleOne="Hassle Free Gate Control!" sectionTitileColorOne=" " sectionTitleTwo="" sectionTitileColorTwo="" sectionImage="/img/ultra-comfort-living/gatecontrol.jpg" />
            </section>
        </main>
    );
};

export default UltraComfortLiving;