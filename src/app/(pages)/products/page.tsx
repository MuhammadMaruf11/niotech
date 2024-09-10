import BannerImg from '@/components/common/Banner/BannerImg';
import AllProducts from '@/components/OurProducts/AllProducts';



const Categories = async () => {
    const imageBg = '/img/bg/banner-products.jpg';
    const bannerTitle = 'PRODUCTS';
    const bannerDescription = ' ';

    // Fetching data from an API
    const res = await fetch('https://theniotech.com/api/Categories');
    const data = await res.json();
    const categories = data.data;


    return (
        <main>
            <BannerImg imageBg={imageBg} bannerTitle={bannerTitle} bannerDescription={bannerDescription} />
            <AllProducts categories={categories} />
        </main>
    );
};



export default Categories;