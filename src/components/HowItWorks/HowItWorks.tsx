/* eslint-disable @next/next/no-img-element */
import { howItWorksData } from "@/allData/howItWorksData";

const HowItWorks = () => {
    return (
        <section className="bg-[#2196f3] py-4">
            <div className="grid lg:grid-cols-2 gap-6 px-3 mb-12 items-center max-w-screen-xl mx-auto">
                <div className="text-white">
                    <h2 className="text-3xl mb-20 font-bold">How it Works</h2>
                    {howItWorksData?.map((data, index) => {
                        return (
                            <div key={index} className="flex gap-5 mb-12">
                                <div className="text-black p-3 w-8 h-8 text-center bg-white rounded-full flex items-center justify-center">
                                    <i className={`${data?.icon} text-sm`}></i>
                                </div>
                                <div className="">
                                    <h5 className="text-lg">Step {index + 1} : {data?.title}</h5>
                                    <p className="text-justify">{data?.descritpion}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="s">
                    <img loading="lazy" src="/img/random-img/howitworks.png" alt="" />
                </div>
            </div>
            <div className="py-12 max-w-screen-xl mx-auto">
                <div className="text-white">
                    <p className="text-center">… Or you can just give us a shout, and let us know your requirements. We’ll be happy to assist you.</p>

                </div>
            </div>
        </section>
    );
};

export default HowItWorks;