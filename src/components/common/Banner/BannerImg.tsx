import { FC } from "react";

interface BannerProps {
    imageBg: string;
    bannerTitle: string;
    bannerDescription: string;
}

const BannerImg: FC<BannerProps> = ({ imageBg, bannerTitle, bannerDescription }) => {

    return (
        <section style={{ backgroundImage: `url(${imageBg})` }} className='bg-cover bg-top relative bg-no-repeat pt-32 pb-44'>
            <div className="banner-overlay"></div>
            <div className="container max-w-screen-lg mx-auto relative z-20 text-white text-center">
                <h1 className="text-white font-semibold text-4xl mb-6">{bannerTitle}</h1>
                {bannerDescription === bannerDescription.toUpperCase() ? <p className="text-lg text-[yellow]">{bannerDescription}</p> : <p className="text-lg">{bannerDescription}</p>}
            </div>
        </section>
    );
};

export default BannerImg;
