/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';

interface SectionDescription {
    paragraph: string;
}

interface sectionProps {
    sectionTitleOne: string;
    sectionTitleTwo: string;
    sectionTitileColorOne: string;
    sectionTitileColorTwo: string;
    sectionImage: string;
    sectionBodyDescriptionsData?: SectionDescription[];
}

const SectionBodyRight: FC<sectionProps> = ({ sectionTitleOne, sectionTitleTwo, sectionTitileColorOne, sectionTitileColorTwo, sectionImage, sectionBodyDescriptionsData }) => {
    return (
        <div className='container mx-auto max-w-screen-xl px-3'>
            <div className="grid lg:grid-cols-2 gap-6">
                <div>
                    <img className='mx-auto' loading="lazy" src={sectionImage} alt="section_right_side" />
                </div>
                <div>
                    <h3 className='mb-2'>{sectionTitleOne && sectionTitleOne}
                        {sectionTitileColorOne && <strong className='text-[#0c71c3]'>{sectionTitileColorOne}</strong>}
                        {sectionTitleTwo && sectionTitleTwo}
                        {sectionTitileColorTwo && <strong className='text-[#00b202]'>{sectionTitileColorTwo}</strong>}
                    </h3>
                    <div className="space-y-4">
                        {sectionBodyDescriptionsData?.map((data, index) => {
                            return (
                                <p key={index}>
                                    {data?.paragraph}
                                </p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SectionBodyRight;