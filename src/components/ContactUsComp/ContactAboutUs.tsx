import React from 'react';
import SectionTitle from '../ui/SectionTitle/SectionTitle';
import { contactAboutData } from '@/allData/contactAboutData';

const ContactAboutUs = () => {

    const titleHeading = 'About Us'

    return (
        <section className='py-12 '>
            <SectionTitle titleHeading={titleHeading} />
            <div className="container mx-auto lg:max-w-screen-lg px-3">
                <div className="grid grid-cols-4  gap-6">
                    {contactAboutData?.map((data, index) => {
                        const { icon, title, email } = data;
                        return (<div className="flex flex-col mb-5 text-center border-gray-500 items-center border-2 rounded-sm p-6 justify-between bg-white" key={index}>
                            <i className={`${icon} bg-[#4ec2e7] rounded-full w-12 h-12 items-center justify-center`} style={{ display: 'flex' }}></i>
                            <h4 className="font-semibold my-2.5">{title}</h4>
                            <p className="">{email}</p>
                        </div>)
                    })}
                </div>
            </div>
        </section>
    );
};
export default ContactAboutUs;