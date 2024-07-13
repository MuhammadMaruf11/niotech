/* eslint-disable @next/next/no-img-element */
import { interactiveData } from "@/allData/interactiveData";


const InteractiveComp = () => {
    return (
        <div className='container mx-auto max-w-screen-xl'>
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <h3 className='mb-10'>
                        Interactive Smart Home Control
                    </h3>
                    <div className="space-y-4">
                        {interactiveData?.map((data, index) => {
                            const { icon, title, description } = data;
                            return (
                                <div key={index} className="flex gap-6">
                                    <i className={`${icon} text-3xl pt-2`}></i>
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
                    <img src='/img/interactive-home/interactivesmarthome.jpg' alt="" />
                </div>
            </div>
        </div>
    );
};

export default InteractiveComp;