'use client';
import { motion } from 'framer-motion';
import { countMeterData } from '@/allData/countMeterData';
import CountUp from 'react-countup';

const CountMeter = () => {
    return (
        <div className='container mx-auto max-w-screen-xl'>
            <div className="grid grid-cols-4 gap-6">
                {countMeterData?.map((data, index) => {
                    const { color, title, number } = data;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="flex flex-col items-center"
                        >
                            <div className='text-7xl mb-5' style={{ color }}>
                                <CountUp end={number} duration={2} delay={1} />
                                {index === countMeterData.length - 1 && '%'}
                            </div>
                            <h6>{title}</h6>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    );
};

export default CountMeter;
