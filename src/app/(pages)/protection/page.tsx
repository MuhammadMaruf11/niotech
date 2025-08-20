import BannerImg from "@/components/common/Banner/BannerImg";
import SectionBodyConcepts from "@/components/common/Section/SectionBodyConcepts";
import SectionBodyLeft from "@/components/common/Section/SectionBodyLeft";
import SectionBodyRight from "@/components/common/Section/SectionBodyRight";
import { SITE_URL } from "@/config/siteConfig";


const page = async () => {

    const res = await fetch(`${SITE_URL}/api/protection`, {
        cache: 'no-store'
    })

    const data = await res.json();
    const { protectionBodyFifth, protectionBodyFourth, protectionBodyThird, protectionData } = data;

    const imageBg = '/img/bg/banner-protection.jpg';
    const bannerTitle = "Protect Your Loved Ones";
    const bannerDescription = 'Get instant alerts on your smartphone when your home is hit by fire, flood or any other disaster and configure the central automation system to take corrective action instantly.';
    return (
        <main>
            <BannerImg imageBg={imageBg} bannerTitle={bannerTitle} bannerDescription={bannerDescription} />
            <section className='py-20'>
                <SectionBodyConcepts sectionTitle='Protection Against Natural Accidents' sectionBodyContentsData={protectionData} sectionImage="/img/protection/banner.webp" />
            </section>
            <section className='py-20 bg-theme text-white'>
                <SectionBodyRight sectionBodyDescriptionsData={protectionBodyFifth} sectionTitleOne="Smoke and Temperature Sensing" sectionTitileColorOne=" " sectionTitleTwo="" sectionTitileColorTwo="" sectionImage="/img/protection/smoke.jpg" />
            </section>
            <section className='py-20'>
                <SectionBodyLeft sectionBodyDescriptionsData={protectionBodyThird} sectionTitleOne="Instant detection and difficult to submerge " sectionTitileColorOne=" " sectionTitleTwo="" sectionTitileColorTwo="" sectionImage="/img/protection/submerge.jpg" />
            </section>
            <section className='py-20'>
                <SectionBodyRight sectionBodyDescriptionsData={protectionBodyFourth} sectionTitleOne="Configure with other Devices " sectionTitileColorOne=" " sectionTitleTwo="  " sectionTitileColorTwo="" sectionImage="/img/protection/configure.jpg" />
            </section>
        </main>
    );
};

export default page;