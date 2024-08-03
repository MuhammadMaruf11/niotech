'use client'
import { motion } from 'framer-motion';

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const OurThoughts = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto max-w-screen-lg px-3">
                <div className="space-y-6">
                    <motion.p
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="font-bold"
                    >
                        OUR STRATEGY
                    </motion.p>
                    <motion.p
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        We put all of our knowledge and creativity into efficiently integrating products that become trendsetting innovations. At <strong>Niotech Smart Solutions Ltd.</strong> we turn this motto into reality by providing our customers with a complete automation solution that provides maximum flexibility and economic efficiency.
                    </motion.p>
                    <motion.p
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="font-bold"
                    >
                        OUR AFTER SALES SERVICE
                    </motion.p>
                    <motion.p
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        Our after-sales service is one of the strong pillars of our sustainable and credible business model. This core strength is the foundation of the 100% future proof business model that <strong>Niotech Smart Solutions Ltd.</strong> works on.
                    </motion.p>

                    <motion.p
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="font-bold"
                    >
                        WE PROVIDE
                    </motion.p>
                    <motion.p
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        We provide the required technical support for troubleshooting and order processing services, easy-to-understand documentation, and also a library of support material to provide answers to the various queries of our customers. Solutions are what <strong>Niotech Smart Solutions Ltd.</strong> takes seriously, no matter how difficult the job.
                    </motion.p>

                    <motion.p
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="font-bold"
                    >
                        WE PROFESSIONAL
                    </motion.p>
                    <motion.p
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        We house professional and trained staff, who are aligned with our goal and strive to do justice to our business model. Apart from providing opportunities, <strong>Niotech Smart Solutions Ltd.</strong> has invested efforts to train the staff and update their skill set, to embrace new technology on the go.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default OurThoughts;
