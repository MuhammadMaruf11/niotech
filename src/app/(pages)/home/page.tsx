import Concepts from "@/components/Concepts/Concepts";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import BannerSlider from "@/components/common/Banner/BannerSlider";

const Home = () => {
    return (
        <main>
            {/* <BannerSlider /> */}
            <WhoWeAre />
            <Concepts />
        </main>
    );
};

export default Home;