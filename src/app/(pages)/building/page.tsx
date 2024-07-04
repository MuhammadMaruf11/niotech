import { sectionBodyFifth, sectionBodyFirst, sectionBodyFourth, sectionBodySecond, sectionBodySixth, sectionBodyThird, sectionHeadingFirst, sectionHeadingSecond } from "@/allData/buildingPageData";
import BannerImg from "@/components/common/Banner/BannerImg";
import SectionBodyLeft from "@/components/common/Section/SectionBodyLeft";
import SectionBodyRight from "@/components/common/Section/SectionBodyRight";
import SectionHeading from "@/components/common/Section/SectionHeading";

const Building = () => {
    const imageBg = '/img/bg/banner-building.jpg';
    const bannerTitle = 'Building the future of homes';
    const bannerDescription = 'Eliminate manual interactions. Reduce energy footprint. Deploy proactive security measures. The future of residential and commercial spaces is here.';


    return (
        <main>
            <BannerImg imageBg={imageBg} bannerTitle={bannerTitle} bannerDescription={bannerDescription} />
            <SectionHeading
                sectionTitleOne={`What's a `}
                sectionTitleColorOne={`Smart Building`}
                sectionTitleTwo={``}
                sectionTitleColorTwo={``}
                sectionDescriptionsData={sectionHeadingFirst}
            />
            <section className='py-12'>
                <SectionBodyLeft sectionBodyDescriptionsData={sectionBodyFirst} sectionTitleOne="Not a " sectionTitileColorOne="building, " sectionTitleTwo="but a " sectionTitileColorTwo="lifestyle. " sectionImage="/img/building/buildinglifestyle.jpg" />
            </section>
            <SectionHeading
                sectionTitleOne={`Why do you need `}
                sectionTitleColorOne={`Smart `}
                sectionTitleTwo={``}
                sectionTitleColorTwo={`Building`}
                sectionDescriptionsData={sectionHeadingSecond}
            />
            <section className='py-12'>
                <SectionBodyLeft sectionBodyDescriptionsData={sectionBodySecond} sectionTitleOne="Automate " sectionTitileColorOne="lobby lights. " sectionTitleTwo="Save  " sectionTitileColorTwo="energy. " sectionImage="/img/building/hotellobby.jpg" />
            </section>
            <section className='py-12'>
                <SectionBodyRight sectionBodyDescriptionsData={sectionBodyThird} sectionTitleOne="Get notified before " sectionTitileColorOne="intrusion " sectionTitleTwo="happens. " sectionTitileColorTwo="" sectionImage="/img/building/Fibaro_Motion_Recognition.jpg" />
            </section>
            <section className='py-12'>
                <SectionBodyRight sectionBodyDescriptionsData={sectionBodyFourth} sectionTitleOne="Trigger smart " sectionTitileColorOne="fire/smoke " sectionTitleTwo="alarms. " sectionTitileColorTwo="" sectionImage="/img/building/fire-sensors.jpg" />
            </section>
            <section className='py-12'>
                <SectionBodyLeft sectionBodyDescriptionsData={sectionBodyFifth} sectionTitleOne="Automate " sectionTitileColorOne="water " sectionTitleTwo="management.  " sectionTitileColorTwo="" sectionImage="/img/building/Shower-Head-Wireless-Speakers.jpg" />
            </section>
            <section className='py-12'>
                <SectionBodyRight sectionBodyDescriptionsData={sectionBodySixth} sectionTitleOne="Keep an " sectionTitileColorOne="eye " sectionTitleTwo="on every floor. " sectionTitileColorTwo="" sectionImage="/img/building/Surveillance-camera.jpg" />
            </section>
        </main>
    );
};

export default Building;