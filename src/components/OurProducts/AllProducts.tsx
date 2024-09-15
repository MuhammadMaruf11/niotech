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
        <section className="py-12">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:gap-16 lg:gap-6 gap-6 px-3 max-w-screen-xl mx-auto">
                {categories?.map((data, index) => (
                    <div key={index} className="bg-white p-5 border border-gray-300 text-center h-96 flex flex-col justify-between">
                        <h3 className="font-normal text-xl text-[#333]">{data.CategoryName}</h3>
                        <Image src={`https://theniotech.com/assets/images/CategoryImages/${data.ImagePath}`} width={334} height={222} alt="product" />
                        <Link className="mt-3 border border-black text-[#242424] w-100 inline-flex h-12 justify-center items-center hover:text-white hover:bg-black" href={`/products/${data.CategoryID}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AllProducts;