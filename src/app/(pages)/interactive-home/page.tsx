import { interactiveBodyFifth, interactiveBodyFourth, interactiveBodyThird, interactiveData } from '@/allData/interactiveData';
import BannerImg from '@/components/common/Banner/BannerImg';
import SectionBodyConcepts from '@/components/common/Section/SectionBodyConcepts';
import SectionBodyLeft from '@/components/common/Section/SectionBodyLeft';
import SectionBodyRight from '@/components/common/Section/SectionBodyRight';

const HomeSecurity = () => {
    const imageBg = '/img/bg/banner-interactive-home.jpg';
    const bannerTitle = "Don't Think. Just Ask.";
    const bannerDescription = 'Introducing Amazon Echo, the world’s first voice-assistant that can hear you from anywhere. Want to turn your air-conditioner? Need help planning your grocery list? Want to call an Uber? No need to grab that smartphone. Just ask Alexa.';
    return (
        <main>
            <BannerImg imageBg={imageBg} bannerTitle={bannerTitle} bannerDescription={bannerDescription} />
            <section className='py-20'>
                <SectionBodyConcepts sectionTitle='Interactive Smart Home Control' sectionBodyContentsData={interactiveData} sectionImage="/img/interactive-home/interactivesmarthome.jpg" />
            </section>
            <section className='py-20'>
                <SectionBodyRight sectionBodyDescriptionsData={interactiveBodyThird} sectionTitleOne="Always your Companion at any time of the day " sectionTitileColorOne=" " sectionTitleTwo="" sectionTitileColorTwo="" sectionImage="/img/interactive-home/companion.jpeg" />
            </section>
            <section className='py-20'>
                <SectionBodyLeft sectionBodyDescriptionsData={interactiveBodyFourth} sectionTitleOne="Far-Field Voice Recognition " sectionTitileColorOne=" " sectionTitleTwo="  " sectionTitileColorTwo="" sectionImage="/img/interactive-home/voicerecognition.png" />
            </section>
            <section className='py-20 bg-theme text-white'>
                <SectionBodyRight sectionBodyDescriptionsData={interactiveBodyFifth} sectionTitleOne="Control Your Smart Home " sectionTitileColorOne=" " sectionTitleTwo="" sectionTitileColorTwo="" sectionImage="/img/interactive-home/controlhome.jpg" />
            </section>
        </main>
    );
};

export default HomeSecurity;