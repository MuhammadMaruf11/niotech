import { faqData } from '@/allData/faqData';
import React from 'react';

const FaqComp = () => {
    return (
        <section className='py-12'>
            <div className='mx-auto max-w-screen-xl'>
                <h4 className='mb-12 text-center text-gray-800 font-semibold'>Frequently Asked Questions</h4>
                <div className="space-y-4">
                    {faqData?.map((data, index) => {
                        return (
                            <details key={index} className="group">
                                <summary className="flex items-center justify-between p-4 list-none border group-open:border-b-0 bg-[#f4f4f4] border-[#d9d9d9] cursor-pointer">
                                    <h3 className="text-base font-medium text-blue-400">{data.title}</h3>
                                    <span className="transition group-open:rotate-180">
                                        <i className="fa-sharp fa-solid fa-angle-down"></i>
                                    </span>
                                </summary>
                                <div className="p-4 bg-[#f4f4f4] border group-open:border-t-0 border-[#d9d9d9] group-open:animate-fadeIn">
                                    <p dangerouslySetInnerHTML={{ __html: data.descriptionOne }} />
                                    {data?.descriptionTwo && <p className='mt-4'>{data.descriptionTwo}</p>}
                                </div>
                            </details>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default FaqComp;