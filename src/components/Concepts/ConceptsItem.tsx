'use client';
import { FC } from "react";
import { motion } from "framer-motion";
import { conceptItemImgData } from "@/allData/conceptItemImgData";
import Link from "next/link";
import Image from "next/image";

const ConceptsItem: FC = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-4">
            {conceptItemImgData?.map((data, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                    <Link href={data?.url}>
                        <Image
                            width={360} height={0}
                            className="lg:h-[220px] md:h-64"
                            src={data?.img}
                            alt="concept"
                        />
                    </Link>
                </motion.div>
            ))}
        </div>
    );
};

export default ConceptsItem;
