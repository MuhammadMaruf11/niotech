import Concepts from "@/components/Concepts/Concepts";
import BannerSlider from "@/components/common/Banner/BannerSlider";
import { SITE_URL } from "@/config/siteConfig";

const Home = async () => {

    const res = await fetch(`${SITE_URL}/api/home`, {
        cache: "no-store",
    });
    const data = await res.json();

    const { bannerHomeData } = data;

    return (
        <main>
            <BannerSlider bannerSilderData={bannerHomeData} />
            <Concepts />
        </main>
    );
};

export default Home;