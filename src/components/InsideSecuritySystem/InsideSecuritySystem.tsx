/* eslint-disable @next/next/no-img-element */
import React from 'react';
import SectionTitle from '../ui/SectionTitle/SectionTitle';
import { insideSecuritSystemData } from '@/allData/insideSecuritSystemData';
import Link from 'next/link';

const InsideSecuritySystem = () => {

    const titleHeading = 'Inside Security System'

    return (
        <section className='py-12 '>
            <SectionTitle titleHeading={titleHeading} />
            <div className="container mx-auto lg:max-w-screen-lg px-3">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
                    {insideSecuritSystemData?.map((data, index) => {
                        const { img, title, id } = data;
                        return (<Link href={id} className="flex flex-col group mb-5 text-center border-gray-200 hover:border-gray-300 transition-all duration-300 ease-linear items-center border-2 rounded-sm lg:p-6 py-10 px-6  justify-between bg-white" key={index}>
                            <img loading='lazy' src={img} alt="icon" />
                            <h5 className="font-semibold lg:my-4 my-10">{title}</h5>
                            <i className='fa-sharp fas fa-chevron-down border text-[#4ec2e7] border-[#4ec2e7] group-hover:text-black transition-all ease-linear duration-300 rounded-full w-12 h-12 items-center justify-center' style={{ display: 'flex' }}></i>
                        </Link>)
                    })}
                </div>
            </div>
        </section>
    );
};

export default InsideSecuritySystem;