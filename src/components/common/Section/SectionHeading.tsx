import { FC } from 'react';

interface SectionDescription {
    paragraph: string;
}

interface sectionProps {
    sectionTitleOne: string;
    sectionTitleTwo: string;
    sectionTitleColorOne: string;
    sectionTitleColorTwo: string;
    sectionDescriptionsData?: SectionDescription[];
}

const SectionHeading: FC<sectionProps> = ({ sectionTitleOne, sectionTitleTwo, sectionTitleColorOne, sectionTitleColorTwo, sectionDescriptionsData }) => {
    return (
        <section className='py-12'>
            <div className="container mx-auto max-w-screen-xl px-3">
                <h2 className='text-center mb-4 text-3xl'>{sectionTitleOne && sectionTitleOne}
                    {sectionTitleColorOne && <strong className='text-[#0c71c3]'>{sectionTitleColorOne}</strong>}
                    {sectionTitleTwo && sectionTitleTwo}
                    {sectionTitleColorTwo && <strong className='text-[#00b202]'>{sectionTitleColorTwo}</strong>}
                </h2>
                <div className="space-y-4">
                    {sectionDescriptionsData?.map((data, index) => {
                        return (
                            <p key={index}>{data?.paragraph}</p>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default SectionHeading;