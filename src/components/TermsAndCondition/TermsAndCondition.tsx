'use client'
import { motion } from 'framer-motion';

const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
};

const TermsAndCondition = () => {
    return (
        <section className="py-12">
            <div className='max-w-screen-lg mx-auto px-3'>
                <div className="space-y-8">
                    <div className="mb-20">
                        <motion.h2
                            className='font-bold md:text-4xl text-3xl text-gray-800'
                            initial="hidden"
                            animate="visible"
                            variants={headingVariants}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            Terms And Condition
                        </motion.h2>
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            In the below write-up, “we” or “us” refers to <strong>Niotech Smart Solutions Ltd.</strong> and “you” refers to the consumer or the site visitor. The Terms and Conditions are liable to be changed without any prior notice and it is the responsibility of the user to stay updated with changes if any.
                        </motion.p>
                        <motion.h4
                            className='mt-3'
                            initial="hidden"
                            animate="visible"
                            variants={headingVariants}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            NO WARRANTIES
                        </motion.h4>
                    </div>
                    <div className="mb-3">
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            The information contained on this Website is provided without any warranties or representations as to accuracy, completeness or timeliness. We does not warrant that the Website or its operation will be accurate, reliable, uninterrupted or error-free. We assumes no liability or responsibility for any errors or omissions in the content or operation of the Website. <strong>Niotech Smart Solutions Ltd.</strong> reserves the right to modify the information contained in this website without notice, and makes no commitment to update the information contained in this website. Use the website at your own risk. This website is provided to you "as is," without warranty of any kind, either expressed or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose. Please note that some jurisdictions may not allow the exclusion of implied warranties, so some of the above exclusions may not apply. We also assumes no responsibility for, and shall not be liable for, any damages to, or viruses that may infect, your computer equipment or other property as a result of your access to, use of, or browsing in the Website or your downloading of any files, images, text or other materials from the Website.
                        </motion.p>
                    </div>
                    <div>
                        <motion.h4
                            className='font-bold text-gray-800'
                            initial="hidden"
                            animate="visible"
                            variants={headingVariants}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            EXCLUSION OF LIABILITY
                        </motion.h4>
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            In no event will <strong>Niotech Smart Solutions Ltd.</strong> be liable for any direct, indirect, special, consequential, punitive, exemplary or other damages arising out of the use of this website, including, without limitation, lost profits, business interruption and loss of programs or other data.
                        </motion.p>
                    </div>
                    <div>
                        <motion.h4
                            className='font-bold text-gray-800'
                            initial="hidden"
                            animate="visible"
                            variants={headingVariants}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            TRADEMARKS
                        </motion.h4>
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            The trademarks, logos, and service marks (collectively the "Trademarks") displayed on the Website are trademarks of <strong>Niotech Smart Solutions Ltd.</strong> Other trademarks appear on the website with permission from their respective owners. Nothing contained on the Website should be construed as granting any license or right to use any Trademark displayed on the website. Unauthorized use of the Trademarks is strictly prohibited and may constitute trademark infringement, which could subject you to substantial civil and criminal penalties. We will aggressively enforce its trademark rights to the fullest extent of the law, including the seeking of criminal prosecution.
                        </motion.p>
                    </div>
                    <div>
                        <motion.h4
                            className='font-bold text-gray-800'
                            initial="hidden"
                            animate="visible"
                            variants={headingVariants}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            USER SUBMISSIONS
                        </motion.h4>
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            Any communication or material you transmit to us using the website or via electronic mail to any address listed on the website, including any data, questions, comments, suggestions or the like, is and will be treated as non-confidential and non-proprietary, shall become the property of <strong>Niotech Smart Solutions Ltd.</strong> and may be used by us for any purpose.
                        </motion.p>
                    </div>
                    <div>
                        <motion.h4
                            className='font-bold text-gray-800'
                            initial="hidden"
                            animate="visible"
                            variants={headingVariants}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            LINKS AND LINKING
                        </motion.h4>
                        <motion.p
                            className='mb-3'
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            This Website may contain hyperlinks to other websites. Such links are meant solely for the user's convenience. <strong>Niotech Smart Solutions Ltd.</strong> has no control over, and is not responsible for the content found on, external websites. Links to such third party websites do not constitute sponsorship, endorsement or approval of such websites or the contents thereof. You may establish a link to this Website, provided that
                        </motion.p>
                        <motion.p
                            className='mb-3'
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            You do not remove or obscure the copyright notice or other notices on this website. You discontinue providing a link to this website if so requested by us. We reserves the right to revoke this license generally, or your right to use specific links, at any time.
                        </motion.p>
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            Under no circumstances may you "frame" the Website or any of its content or copy portions of the Website to a server, except as part of an Internet service provider's incidental caching of pages. Each page within the Website must be displayed in full (including all trademarks, branding, advertising and promotional materials), without any accompanying frame, border, margin, design, branding, trademark, advertising or promotional materials not originally displayed on the page within the website.
                        </motion.p>
                    </div>
                    <div>
                        <motion.h4
                            className='font-bold text-gray-800'
                            initial="hidden"
                            animate="visible"
                            variants={headingVariants}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            TERMINATION OF PRIVILEGES
                        </motion.h4>
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            We reserves the right to terminate your privilege of using all or any portion of the website if you breach any of these Terms and Conditions.
                        </motion.p>
                    </div>
                    <div>
                        <motion.h4
                            className='font-bold text-gray-800'
                            initial="hidden"
                            animate="visible"
                            variants={headingVariants}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            ENTIRE AGREEMENT
                        </motion.h4>
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            These Terms and Conditions constitute the entire agreement and understanding between you and <strong>Niotech Smart Solutions Ltd.</strong> with respect to use of the Website, superseding all prior or contemporaneous communications and/or proposals. We reserves the right to make changes to these Terms and Conditions immediately by posting the changed Terms and Conditions in this location. By continuing to use the Website, you are agreeing to all changes made by us. A printed version of these Terms and Conditions shall be admissible in judicial or administrative proceedings based upon or relating to use of the website to the same extent, and subject to the same conditions, as other business documents and records originally generated and maintained in printed form.
                        </motion.p>
                    </div>
                    <div>
                        <motion.h4
                            className='font-bold text-gray-800'
                            initial="hidden"
                            animate="visible"
                            variants={headingVariants}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            Sales & Quote Disclaimers
                        </motion.h4>
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            If this communication contains information about products, services, and pricing offered by us, please be advised that product, service, and pricing information is subject to change at any time without notice. Pricing and availability are not guaranteed. Certain promotions may be available from time-to-time, however any quote provided online or from our consultant is not guaranteed until the time of contract signing.
                        </motion.p>
                    </div>
                    <div>
                        <motion.h4
                            className='font-bold text-gray-800'
                            initial="hidden"
                            animate="visible"
                            variants={headingVariants}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            Global Disclaimer for All E-mail Communications
                        </motion.h4>
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            The information contained in and accompanying this communication may be confidential, subject to legal privilege, or otherwise protected from disclosure, and is intended solely for the use of the intended recipient(s). If you are not the intended recipient of this communication, please delete and destroy all copies in your possession, notify the sender that you have received this communication in error, and note that any review or dissemination of, or the taking of any action in reliance on, this communication is expressly prohibited. E-mail messages may contain computer viruses or other defects, may not be accurately replicated on other systems, or may be intercepted, deleted or interfered with without the knowledge of the sender or the intended recipient. We makes no warranties in relation to these matters. Please note that we reserves the right to intercept, monitor, and retain e-mail messages to and from its systems as permitted by applicable law. If you are not comfortable with the risks associated with e-mail messages, you may decide not to use e-mail to communicate with <strong>Niotech Smart Solutions Ltd.</strong>
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TermsAndCondition;
