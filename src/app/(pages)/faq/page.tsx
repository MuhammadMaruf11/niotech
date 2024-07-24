import BannerImg from '@/components/common/Banner/BannerImg';
import FaqComp from '@/components/FaqComp/FaqComp';

const FAQ = () => {

    return (
        <main>
            <section className="bg-[url('/img/bg/banner-faq.jpg')] bg-cover bg-center relative bg-no-repeat py-60"></section>
            <FaqComp />
        </main>
    );
};

export default FAQ;