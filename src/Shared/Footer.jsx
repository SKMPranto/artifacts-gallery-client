import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <NavLink to="/">
        <aside className="flex items-center gap-2">
          <img
            src="https://i.ibb.co/SD6Sc4Wk/logo-without-bg.png"
            alt="Artifacts Gallery Logo"
            className="h-10 md:h-15"
          />
          <p className="lg:text-3xl md:text-2xl font-bold text-[#c09e61] asimovian-regular">
            Artifacts Gallery
          </p>
        </aside>
      </NavLink>

      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <NavLink
            to="https://www.linkedin.com/in/pranto-kumar-/"
            target="_blank"
          >
            <CiLinkedin size="40px" />
          </NavLink>
          <NavLink
            to="https://www.facebook.com/skpranto.skpranto.71"
            className="pt-0.5"
            target="_blank"
          >
            <FaFacebookSquare size="35px" />
          </NavLink>
          <NavLink
            to="https://www.instagram.com/s_pranto_kumar/"
            target="_blank"
          >
            <FaInstagram size="38px" />
          </NavLink>
          <NavLink
            to="https://www.youtube.com/@Pranto_Kumar_2.0"
            target="_blank"
          >
            <FaYoutube size="40px" />
          </NavLink>
        </div>
      <div className="mt-4">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Artifacts Gallery<br />
          Pranto Kumar - jr.developer
        </p>
      </div>
      </nav>
    </footer>
  );
};

export default Footer;
