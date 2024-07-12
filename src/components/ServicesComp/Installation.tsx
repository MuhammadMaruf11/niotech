/* eslint-disable @next/next/no-img-element */
import { serviceDesignData } from '@/allData/serviceDesignData';

const Installation = () => {
    return (
        <div className='grid grid-cols-2 gap-6'>
            <div>
                <h5 className='text-[#e9b021]'>Installation</h5>
                <strong>Drafting services for all aspects of 2D & 3D</strong>
                <div className="space-y-4">
                    <p>Often the most scrutinized element of the process, great installation craftsmanship is the hallmark of our company. The quality of your installation is determined by the people working on your project.</p>
                    <p>Our certified technicians take great care and pride during each phase of installation while treating your home and possession with respect and care. We use the best materials, tools and installation methods on every project. Particular attention is paid to professionalism in working with other trades on your project</p>
                </div>
            </div>
            <div className='space-y-5'>
                <img src="/img/services/installation1.jpg" alt="" />
                <img src="/img/services/installation2.jpg" alt="" />
            </div>
        </div>
    );
};

export default Installation;