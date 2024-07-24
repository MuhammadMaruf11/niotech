import { whyNiotechData } from "@/allData/whyNiotechData";


const WhyNiotech = () => {
    return (
        <section className="bg-[#20aea5] py-20">
            <h2 className="text-center text-2xl mb-12 text-white">WHY <span className="text-[#ffd56c] font-bold">NIOTECH</span> </h2>
            <div className="grid lg:grid-cols-3 xl:gap-24 lg:gap-12 gap-6 px-3 max-w-screen-xl mx-auto">
                {whyNiotechData?.map((data, index) => {
                    return (
                        <div key={index} className="bg-[#e2e2e2] max-w-96 mx-auto flex flex-col items-center justify-center px-4 py-20 text-center">
                            <h3 className="mb-5 text-gray-800 uppercase font-bold text-4xl">{data?.title}</h3>
                            <p>{data?.description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default WhyNiotech;