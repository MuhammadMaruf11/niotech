import { multimediaBodyFifth, multimediaBodyFourth, multimediaBodyThird, multimediaData } from "@/allData/multimediaData";
import BannerImg from "@/components/common/Banner/BannerImg";
import SectionBodyConcepts from "@/components/common/Section/SectionBodyConcepts";
import SectionBodyLeft from "@/components/common/Section/SectionBodyLeft";
import SectionBodyRight from "@/components/common/Section/SectionBodyRight";


const Multimedia = () => {
    const imageBg = '/img/bg/banner-multimedia.jpg';
    const bannerTitle = "Turn On Intelligent Living";
    const bannerDescription = 'Home automation takes comfort to the next level, allowing you to control your television, music system, X-Box, air-conditioner or shades wirelessly from a single universal remote. What’s more? You can even create intelligent scenes to automate routine tasks and instantly switch activities at your fingertips.';
    return (
        <main>
            <BannerImg imageBg={imageBg} bannerTitle={bannerTitle} bannerDescription={bannerDescription} />
            <section className='py-20'>
                <SectionBodyConcepts sectionTitle='Multiple Devices, One Control' sectionBodyContentsData={multimediaData} sectionImage="/img/multimedia/multipledevices.jpg" />
            </section>
            <section className='py-20'>
                <SectionBodyLeft sectionBodyDescriptionsData={multimediaBodyThird} sectionTitleOne="Immersive Smart Home Audio Experience " sectionTitileColorOne=" " sectionTitleTwo="" sectionTitileColorTwo="" sectionImage="/img/multimedia/music.jpg" />
            </section>
            <section className='py-20 bg-[#2196f3] text-white'>
                <SectionBodyRight sectionBodyDescriptionsData={multimediaBodyFifth} sectionTitleOne="Watch TV Anywhere! Everywhere!! " sectionTitileColorOne=" " sectionTitleTwo="" sectionTitileColorTwo="" sectionImage="/img/multimedia/tv.jpg" />
            </section>
            <section className='py-20'>
                <SectionBodyLeft sectionBodyDescriptionsData={multimediaBodyFourth} sectionTitleOne="Easy Integration of Devices for One-Touch Control " sectionTitileColorOne=" " sectionTitleTwo="  " sectionTitileColorTwo="" sectionImage="/img/multimedia/integration.png" />
            </section>
        </main>
    );
};

export default Multimedia;