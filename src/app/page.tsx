import BannerSlider from "@/components/common/Banner/BannerSlider";
import WelcomeTo from "@/components/WelcomeTo/WelcomeTo";
import VideoComp from "@/components/Video/VideoComp";
import ServicesComp from "@/components/ServicesComp/ServicesComp";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import WhyNiotech from "@/components/WhyNiotech/WhyNiotech";
import OurProducts from "@/components/OurProducts/OurProducts";
import ClientExperience from "@/components/ClientExperience/ClientExperience";
import OurBrands from "@/components/OurBrands/OurBrands";
import { SITE_URL } from "@/config/siteConfig";

async function fetchData(endpoint: string) {
  const res = await fetch(`${SITE_URL}/api/${endpoint}`, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
  return res.json();
}

export default async function Home() {
  const [
    { bannerData },
    { clientExperienceData },
    { ourBrandsData },
    { ourProductsData },
    { whyNiotechData },
    { howItWorksData },
    { servicesCompData },
  ] = await Promise.all([
    fetchData("bannerData"),
    fetchData("client-experience"),
    fetchData("our-brand"),
    fetchData("products"),
    fetchData("why-niotech"),
    fetchData("how-it-works"),
    fetchData("services"),
  ]);

  return (
    <main>
      <BannerSlider bannerSilderData={bannerData} />
      <WelcomeTo />
      <VideoComp />
      <ServicesComp servicesCompData={servicesCompData} />
      <HowItWorks howItWorksData={howItWorksData} />
      <WhyNiotech whyNiotechData={whyNiotechData} />
      <OurProducts ourProductsData={ourProductsData} />
      <ClientExperience clientExperienceData={clientExperienceData} />
      <OurBrands ourBrandsData={ourBrandsData} />
    </main>
  );
}
