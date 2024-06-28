/* eslint-disable @next/next/no-img-element */

import { footerContactsData, footerServicesData, footerSocialsData } from "@/allData/footerWidgetData";
import Link from "next/link";


const Footer = () => {

  return (
    <footer className="bg-[url('/img/bg/footer-map.png')] bg-center bg-no-repeat pt-24 bg-[#161827]">
      <div className="pb-28">
        <div className="mx-auto grid md:grid-cols-2 max-w-7xl lg:grid-cols-4 gap-6 px-3">
          <div className=" text-white">
            <Link href="/">
              <img className="w-60" loading="lazy" src="/img/logo/logo.png" alt="footer" />
            </Link>
            <p className="pt-5 text-justify">NIOTECH SMART is a system integrator, whose work is characterized by a steady stream of innovations that significantly influence the latest trends in automation.</p>
          </div>
          <div className=" text-white pl-14">
            <h3 className="mb-8 text-2xl font-semibold">Services</h3>
            <ul className="space-y-4">
              {footerServicesData?.map((data, index) => {
                return (
                  <li key={index} className="">
                    <Link href={data?.url} className="text-[#b7bbc1]">
                      <i className="fa-sharp fa-solid fa-caret-right"></i>&nbsp;
                      {data.title}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="text-white">
            <h3 className="mb-8 text-2xl font-semibold">Follow Us</h3>
            <ul className="space-y-4">
              {footerSocialsData?.map((data, index) => {
                return (
                  <li key={index} className="">
                    <Link href={data?.url} className="text-[#b7bbc1]">
                      <i className={data.icon}></i>&nbsp;
                      {data.title}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className=" text-white">
            <h3 className="mb-8 text-2xl font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              {footerContactsData?.map((data, index) => {
                return (
                  <li key={index} className="">
                    <Link href={data?.url} className="text-[#b7bbc1]">
                      <i className={data.icon}></i>&nbsp;
                      {data.title}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#ffffff1a] text-[#b7bbc1] py-5 shadow-lg">
        <div className="mx-auto max-w-7xl px-3">
          <p><Link href="/" className="text-white">The Niotech</Link> © 2023 All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
