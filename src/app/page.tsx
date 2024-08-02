import { bannerData } from "@/allData/bannerData";
import ClientExperience from "@/components/ClientExperience/ClientExperience";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import OurBrands from "@/components/OurBrands/OurBrands";
import OurProducts from "@/components/OurProducts/OurProducts";
import ServicesComp from "@/components/ServicesComp/ServicesComp";
import VideoComp from "@/components/Video/VideoComp";
import WelcomeTo from "@/components/WelcomeTo/WelcomeTo";
import WhyNiotech from "@/components/WhyNiotech/WhyNiotech";
import BannerSlider from "@/components/common/Banner/BannerSlider";

export default function Home() {


  return (
    <main>
      <BannerSlider bannerSilderData={bannerData} />
      <WelcomeTo />
      <VideoComp />
      <ServicesComp />
      <HowItWorks />
      <WhyNiotech />
      <OurProducts />
      <ClientExperience />
      <OurBrands />
    </main>
  )
}
