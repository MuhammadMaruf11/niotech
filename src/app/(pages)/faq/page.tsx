import BannerImg from '@/components/common/Banner/BannerImg';
import FaqComp from '@/components/FaqComp/FaqComp';

const FAQ = () => {

    return (
        <main>
            <section style={{ backgroundImage: "url(img/bg/banner-faq.jpg)" }} className="bg-cover bg-top relative bg-no-repeat py-60"></section>
            <FaqComp />
        </main>
    );
};

export default FAQ;