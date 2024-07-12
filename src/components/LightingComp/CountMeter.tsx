'use client'
import { countMeterData } from '@/allData/countMeterData';
import CountUp from 'react-countup';

const CountMeter = () => {
    return (
        <div className='container mx-auto max-w-screen-xl'>
            <div className="grid grid-cols-4 gap-6">
                {countMeterData?.map((data, index) => {
                    const { color, title, number } = data;
                    return (
                        <div key={index} className="flex flex-col items-center">
                            <CountUp start={0} end={number} delay={1}>
                                {({ countUpRef }) => (
                                    <div className='text-7xl mb-5' style={{ color: color }}>
                                        <span ref={countUpRef} />
                                        {index === countMeterData?.length - 1 && '%'}
                                    </div>
                                )}
                            </CountUp>
                            <h6>{title}</h6>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default CountMeter;