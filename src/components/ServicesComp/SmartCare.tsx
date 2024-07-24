/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

const SmartCare = () => {
    return (
        <>
            <div>
                <img loading='lazy' className='float-left md:max-w-96  me-4 mb-4' src="/img/services/smartcare.png" alt="consultancy" />
            </div>
            <div className="space-y-4">
                <h5 className='text-[#e9b021] mb-12'>NIOTECH SMART</h5>
                <p>We recognize how important it is that your system is always operating at peak performance. After years of development we’ve created our exclusive SMARTCare Monitoring program, which is a suite of solutions created to deliver a better experience for you.
                    <Link href='/smartcare-monitoring' className="text-blue-700 font-bold"> See More</Link>
                </p>
            </div>
        </>
    );
};

export default SmartCare;