// src/app/shop/[slug]/page.jsx

import BannerImg from "@/components/common/Banner/BannerImg";
import { FC } from "react";


interface Params {
    params: {
        slug: string;
    };
}

const Product: FC<Params> = async ({ params }) => {
    const imageBg = '/img/bg/banner-products.jpg';
    const bannerTitle = 'PRODUCTS';
    const bannerDescription = ' ';

    let product;

    try {
        const res = await fetch(`https://theniotech.com/api/category/wise/products/${params.slug}`);

        if (!res.ok) throw new Error('Product not found');

        product = await res.json();

        console.log('produ', product);

    } catch (error) {
        console.error('Error fetching product:', error);

        product = {
            // Placeholder data or empty object if you prefer
            name: 'Error',
            image_path: '',
            description: 'Unable to fetch product data.',
        };

    }


    const h1Title = "Product Details";

    return (
        <main>
            <BannerImg imageBg={imageBg} bannerTitle={bannerTitle} bannerDescription={bannerDescription} />

        </main>
    );
};

export async function generateStaticParams() {
    try {
        const res = await fetch('https://theniotech.com/api/Categories');
        const data = await res.json();
        const categories: { CategoryID: number }[] = data.data;

        // Generate paths for static rendering
        return categories.map(category => ({
            slug: category.CategoryID.toString(),
        }));
    } catch (error) {
        console.error('Error generating static params:', error instanceof Error ? error.message : 'Unknown error');
        return [];
    }
}

export default Product;