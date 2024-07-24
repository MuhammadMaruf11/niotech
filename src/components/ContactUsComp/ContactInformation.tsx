import { contactInformationData } from "@/allData/contactInformationData";
import SectionTitle from "../ui/SectionTitle/SectionTitle";


const ContactInformation = () => {

    const titleHeading = 'Contact Information'

    return (
        <section className='py-12 bg-[#64bf64]'>
            <SectionTitle titleHeading={titleHeading} />
            <div className="container mx-auto lg:max-w-screen-lg px-3">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:gap-16 gap-6">
                    {contactInformationData?.map((data, index) => {
                        const { icon, title, paraOne, paraTwo } = data;
                        return (<div className="flex flex-col mb-5 text-center items-center p-12 justify-between bg-white" key={index}>
                            <i className={`${icon} text-[#4ec2e7] text-5xl`}></i>
                            <h5 className="my-9 font-semibold">{title}</h5>
                            <p className="mb-4">{paraOne}</p>
                            <p>{paraTwo}</p>
                        </div>)
                    })}
                </div>
            </div>
        </section>
    );
};

export default ContactInformation;