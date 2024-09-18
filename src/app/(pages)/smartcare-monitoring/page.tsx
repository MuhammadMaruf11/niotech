import { smartCareBodyFirst, smartCareBodyFourth, smartCareBodySecond, smartCareBodyThird } from '@/allData/smartCarePageData';
import BannerImg from '@/components/common/Banner/BannerImg';
import SectionBodyLeft from '@/components/common/Section/SectionBodyLeft';
import SectionBodyRight from '@/components/common/Section/SectionBodyRight';

const SmartcareMonitoring = () => {
    const imageBg = '/img/bg/banner-smart-care.jpg';
    const bannerTitle = "Don't Think.Just Ask.";
    const bannerDescription = 'Introducing Amazon Echo, the world’s first voice-assistant that can hear you from anywhere. Want to turn your air-conditioner? Need help planning your grocery list? Want to call an Uber? No need to grab that smartphone. Just ask Alexa.';


    return (
        <main>
            <BannerImg imageBg={imageBg} bannerTitle={bannerTitle} bannerDescription={bannerDescription} />
            <section className='py-20'>
                <SectionBodyRight sectionBodyDescriptionsData={smartCareBodyFirst} sectionTitleOne="PROACTIVELY IDENTIFY POTENTIAL ERRORS " sectionTitileColorOne=" " sectionTitleTwo="" sectionTitileColorTwo="" sectionImage="/img/smart-care/proactive.jpg" />
            </section>
            <section className='py-20'>
                <SectionBodyLeft sectionBodyDescriptionsData={smartCareBodySecond} sectionTitleOne="QUICKLY EXECUTE SYSTEM RESETS " sectionTitileColorOne=" " sectionTitleTwo="  " sectionTitileColorTwo="" sectionImage="/img/smart-care/System.jpg" />
            </section>
            <section className='py-20 bg-theme text-white'>
                <SectionBodyRight sectionBodyDescriptionsData={smartCareBodyThird} sectionTitleOne="REDUCE SERVICE CALLS" sectionTitileColorOne=" " sectionTitleTwo="" sectionTitileColorTwo="" sectionImage="/img/smart-care/calls.jpg" />
            </section>
            <section className='py-20'>
                <SectionBodyLeft sectionBodyDescriptionsData={smartCareBodyFourth} sectionTitleOne="ESTABLISH CLIENT PRIORITY " sectionTitileColorOne="" sectionTitleTwo="" sectionTitileColorTwo="" sectionImage="/img/smart-care/priority.jpg" />
            </section>
        </main>
    );
};

export default SmartcareMonitoring;