import { SITE_URL } from "@/config/siteConfig";
import FooterContent from '@/components/common/Footer/FooterContent';


const Footer = async () => {

  const footerRes = await fetch(`${SITE_URL}/api/footer`, {
    cache: 'no-store'
  })

  const data = await footerRes.json()

  const { footerContactsData, footerServicesData, footerSocialsData } = data;

  
  return (
    <footer className="bg-[url('/img/bg/footer-map.png')] bg-center bg-no-repeat bg-[#161827]">
      <FooterContent
        footerContactsData={footerContactsData}
        footerServicesData={footerServicesData}
        footerSocialsData={footerSocialsData}
      />
    </footer>
  );
};

export default Footer;
