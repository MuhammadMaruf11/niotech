'use client'
import { footerContactsData, footerServicesData, footerSocialsData } from "@/allData/footerWidgetData";
import Link from "next/link";
import { motion } from 'framer-motion';
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[url('/img/bg/footer-map.png')] bg-center bg-no-repeat bg-[#161827]">
      <div className="lg:py-28 md:py-16 py-12">
        <div className="mx-auto grid md:grid-cols-2 max-w-screen-xl lg:grid-cols-4 gap-6 px-3">
          <motion.div
            className="text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/">
              <Image width={240} height={0} className="" src="/img/logo/logo.png" alt="footer" />
            </Link>
            <p className="pt-5 text-justify">
              NIOTECH SMART is a system integrator, whose work is characterized by a steady stream of innovations that significantly influence the latest trends in automation.
            </p>
          </motion.div>
          <motion.div
            className="text-white lg:pl-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-8 text-white text-2xl font-semibold">Services</h3>
            <ul className="space-y-4">
              {footerServicesData?.map((data, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 * index }}
                >
                  <Link href={data?.url} className="text-[#b7bbc1]">
                    <i className="fa-sharp fa-solid fa-caret-right"></i>&nbsp;
                    {data.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="mb-8 text-white text-2xl font-semibold">Follow Us</h3>
            <ul className="space-y-4">
              {footerSocialsData?.map((data, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 * index }}
                >
                  <Link href={data?.url} className="text-[#b7bbc1]">
                    <i className={data.icon}></i>&nbsp;
                    {data.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="mb-8 text-white text-2xl font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              {footerContactsData?.map((data, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 * index }}
                >
                  <Link href={data?.url} className="text-[#b7bbc1]">
                    <i className={data.icon}></i>&nbsp;
                    {data.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="bg-[#ffffff1a] text-[#b7bbc1] py-5 shadow-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="mx-auto max-w-screen-xl px-3">
          <p className="lg:text-left text-center">
            <Link href="/" className="text-white">The Niotech</Link> © 2023 All Right Reserved
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
