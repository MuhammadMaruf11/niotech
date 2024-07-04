import HowItWorks from "@/components/HowItWorks/HowItWorks";
import ServicesComp from "@/components/ServicesComp/ServicesComp";
import VideoComp from "@/components/Video/VideoComp";
import WelcomeTo from "@/components/WelcomeTo/WelcomeTo";
import WhyNiotech from "@/components/WhyNiotech/WhyNiotech";
import BannerSlider from "@/components/common/Banner/BannerSlider";

export default function Home() {
  return (
    <main>
      <BannerSlider />
      <WelcomeTo />
      <VideoComp />
      <ServicesComp />
      <HowItWorks />
      <WhyNiotech />
    </main>
  )
}
