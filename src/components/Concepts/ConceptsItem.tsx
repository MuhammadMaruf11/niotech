/* eslint-disable @next/next/no-img-element */
import { conceptItemImgData } from "@/allData/conceptItemImgData";
import Link from "next/link";

const ConceptsItem = () => {
    return (
        <div className="grid grid-cols-3 gap-6 mb-4">
            {conceptItemImgData?.map((data, index) => {
                return (<div key={index}>
                    <Link href={data?.url}>
                        <img src={data?.img} alt="" />
                    </Link>
                </div>)
            })}
        </div>
    );
};

export default ConceptsItem;