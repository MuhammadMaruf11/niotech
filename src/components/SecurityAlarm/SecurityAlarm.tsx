'use client'
import { FC } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { motion } from 'framer-motion';  // Import Framer Motion
import SectionTitle from '../ui/SectionTitle/SectionTitle';

// Register components required for Pie and Bar charts
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement);

const SecurityAlarm: FC = () => {
    const pieChartData = {
        labels: ['Deterrent Rate', 'Alarm Success Rate'],
        datasets: [
            {
                label: 'Percentage',
                data: [70, 95],
                backgroundColor: ['#007bff', '#e9ecef'],
                borderColor: ['#007bff', '#e9ecef'],
                borderWidth: 1,
            },
        ],
    };

    const barChartData = {
        labels: ['Neighbour Activity', 'Security Cameras', 'Home Alarm System', 'Illuminated entrance'],
        datasets: [
            {
                label: 'Percentage',
                data: [75, 65, 79, 45],
                backgroundColor: '#007bff',
                borderColor: '#007bff',
                borderWidth: 1,
            },
        ],
    };

    return (
        <section>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className=""
            >
                <SectionTitle titleHeading='A Home With a Security Alarm System Has …' />
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="lg:grid lg:grid-cols-2 gap-6 mx-auto px-3 max-w-screen-xl lg:space-y-0 space-y-8"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center"
                    >
                        <Pie data={pieChartData} options={{ responsive: true }} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className=""
                    >
                        <h4 className='text-gray-800 mb-8'>Top Reasons For Theft Aversion</h4>
                        <Bar data={barChartData} options={{ responsive: true }} />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default SecurityAlarm;
