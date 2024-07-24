/* eslint-disable @next/next/no-img-element */
import { conceptItemImgData } from "@/allData/conceptItemImgData";
import Link from "next/link";

const ConceptsItem = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-4">
            {conceptItemImgData?.map((data, index) => {
                return (<div key={index}>
                    <Link href={data?.url}>
                        <img loading="lazy" className="min-w-full lg:h-[220px] md:h-64" src={data?.img} alt="concept" />
                    </Link>
                </div>)
            })}
        </div>
    );
};

export default ConceptsItem;