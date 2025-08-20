import FaqComp from '@/components/FaqComp/FaqComp';
import { SITE_URL } from '@/config/siteConfig';

const FAQ =async () => {

    const res = await fetch(`${SITE_URL}/api/faq`, {
    cache:'no-store'
    })
    
    const data = await res.json()
    const { faqData } = data;

    return (
        <main>
            <section className="bg-[url('/img/bg/banner-faq.jpg')] bg-cover bg-center relative bg-no-repeat py-60"></section>
            <FaqComp faqData={faqData} />
        </main>
    );
};

export default FAQ;