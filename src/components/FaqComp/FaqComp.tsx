'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { FC } from 'react';

interface faqDataType{
    title: string,
    descriptionOne:string
    descriptionTwo:string
}

interface faqProps{
    faqData:faqDataType[]
}

const FaqComp:FC<faqProps> = ({ faqData }) => {
    return (
        <section className='py-12'>
            <div className='mx-auto max-w-screen-xl px-3'>
                <h4 className='mb-12 text-center text-gray-800 font-semibold'>Frequently Asked Questions</h4>
                <div className="space-y-4">
                    {faqData?.map((data, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, height: 0 }}
                                whileInView={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <details className="group">
                                    <summary className="flex items-center justify-between p-4 list-none border group-open:border-b-0 bg-[#f4f4f4] border-[#d9d9d9] cursor-pointer">
                                        <h3 className="text-base font-medium text-blue-400">{data.title}</h3>
                                        <span className="transition-transform group-open:rotate-180">
                                            <i className="fa-sharp fa-solid fa-angle-down"></i>
                                        </span>
                                    </summary>
                                    <AnimatePresence>
                                        <motion.div
                                            className="p-4 bg-[#f4f4f4] border group-open:border-t-0 border-[#d9d9d9]"
                                            initial={{ opacity: 0, height: 0 }}
                                            whileInView={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <p dangerouslySetInnerHTML={{ __html: data.descriptionOne }} />
                                            {data?.descriptionTwo && <p className='mt-4'>{data.descriptionTwo}</p>}
                                        </motion.div>
                                    </AnimatePresence>
                                </details>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default FaqComp;
