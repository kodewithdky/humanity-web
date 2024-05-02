import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter, FaHandsPraying } from "react-icons/fa6";
import { IoHome, IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-zinc-50 text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between">
        <div className="me-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Social network icons container */}
        <div className="flex justify-center">
          <a href="#" className="me-6">
            <FaFacebookF />
          </a>
          <a href="#" className="me-6 ">
            <FaXTwitter />
          </a>
          <a href="#" className="me-6">
            <FaYoutube />
          </a>
          <a href="#" className="me-6">
            <FaInstagram />
          </a>
          <a href="#" className="me-6">
            <FaLinkedinIn />
          </a>
          <a href="#" className="">
            <FaWhatsapp />
          </a>
        </div>
      </div>
      {/* Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* TW Elements section */}
          <div>
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <span className="me-3">
                <FaHandsPraying />
              </span>
              Namaskar Humanity
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          {/* Products section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Services
            </h6>
            <p className="mb-4">
              <a href="#">To create a world</a>
            </p>
            <p className="mb-4">
              <a href="#"> Food & Shelter</a>
            </p>
            <p className="mb-4">
              <a href="#">Helth</a>
            </p>
            <p>
              <a href="#">Other</a>
            </p>
          </div>
          {/* Useful links section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Help me
            </h6>
            <p className="mb-4">
              <a href="#">Work with me</a>
            </p>
            <p className="mb-4">
              <a href="#">Inform me</a>
            </p>
            <p className="mb-4">
              <a href="#">Donate</a>
            </p>
            <p>
              <a href="#">Help</a>
            </p>
          </div>
          {/* Contact section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3">
                <IoHome />
              </span>
              RBL Ratapur, 229316
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3">
                <MdEmail />
              </span>
              help@humanity.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3">
                <IoCall />
              </span>
              +91 8953273123
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <span className="me-3">
                <IoCall />
              </span>
              +91 8953283123
            </p>
          </div>
        </div>
      </div>
      {/*Copyright section*/}
      <div className="bg-black/5 p-6 text-center">
        <span>&copy; 2024 Copyright:&nbsp;</span>
        <a className="font-semibold" href="https://tw-elements.com/">
          Namaskar Humanity
        </a>
      </div>
    </footer>
  );
};

export default Footer;
