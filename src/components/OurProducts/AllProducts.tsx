import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Category {
    CategoryID: 1,
    CategoryName: string;
    ImagePath: string;
}

interface AllProductsProps {
    categories: Category[]; // Array of Category objects
}

const AllProducts: FC<AllProductsProps> = ({ categories }) => {
    return (
        <section className="pt-12">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:gap-16 lg:gap-6 gap-6 px-3 max-w-screen-xl mx-auto">
                {categories?.map((data, index) => (
                    <div key={index} className="bg-white xl:py-14 py-8 xl:px-6 px-4">
                        <h3>{data.CategoryName}</h3>
                        <Image src={`https://theniotech.com/assets/images/CategoryImages/${data.ImagePath}`} width={200} height={50} alt="product" />
                        <Link href={`/products/${data.CategoryID}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AllProducts;