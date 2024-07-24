/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

interface SectionBody {
    icon: string;
    title: string;
    description: string;
}

interface sectionProps {
    sectionTitle: string;
    sectionImage: string;
    sectionBodyContentsData?: SectionBody[];
}

const SectionBodyConcepts: FC<sectionProps> = ({ sectionTitle, sectionImage, sectionBodyContentsData }) => {
    return (
        <div className='container mx-auto max-w-screen-xl'>
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <h3 className='mb-10'>
                        {sectionTitle && sectionTitle}
                    </h3>
                    <div className="space-y-4">
                        {sectionBodyContentsData?.map((data, index) => {
                            const { icon, title, description } = data;
                            return (
                                <div key={index} className="flex gap-6">
                                    <div className="pt-1.5 min-w-10">
                                        <i className={`${icon} text-3xl`}></i>
                                    </div>
                                    <div>
                                        <h6 className="font-medium mb-2">{title}</h6>
                                        <p>{description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <img src={sectionImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SectionBodyConcepts;