import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import fb from "../assets/fb.png";
import x from "../assets/x.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
const Footer = () => {
  return (
    <footer className="bg-footer">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center items-center">
          <Link to="/">
            <img src={logo} alt="" className="h-24" />
          </Link>
        </div>
        <p className="text-center text-white font-medium py-2 text-xs md:text-base w-full xl:w-[50%] mx-auto">
          GameLens is your go-to platform for exploring and sharing game
          reviews. Enjoy a simple, responsive, and user-friendly experience!
        </p>
        <div className="divider mt-0"></div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <nav className="flex flex-col items-center ">
            <h6 className=" text-lg font-bold text-active ">Services</h6>
            <NavLink to="/" className="link link-hover text-white">
              Game Reviews
            </NavLink>
            <NavLink to="/" className="link link-hover text-white">
              Latest Game Ratings
            </NavLink>
            <NavLink to="/" className="link link-hover text-white">
              Trending Games
            </NavLink>
            <NavLink to="/" className="link link-hover text-white">
              Player Recommendations
            </NavLink>
          </nav>
          <nav className="flex flex-col items-center ">
            <h6 className=" text-lg font-bold text-active">Company</h6>
            <NavLink to="/about-us" className="link link-hover text-white">
              About Us
            </NavLink>
            <NavLink to="/contact-us" className="link link-hover text-white">
              Contact
            </NavLink>
          </nav>
          <nav className="flex flex-col items-center ">
            <h6 className=" text-lg font-bold text-active">Legal</h6>
            <NavLink to="/" className="link link-hover text-white">
              Terms of Service
            </NavLink>
            <NavLink to="/" className="link link-hover text-white">
              Privacy Policy
            </NavLink>
            <NavLink to="/" className="link link-hover text-white">
              Cookie Policy
            </NavLink>
            <NavLink to="/" className="link link-hover text-white">
              Returns
            </NavLink>
          </nav>
          <nav className="flex flex-col items-center ">
            <h6 className=" text-lg font-bold text-active">Join With Us</h6>
            <div className="flex justify-center items-center gap-4 pt-3">
              <NavLink to="https://www.facebook.com/bd.gazi97">
                <img src={fb} alt="" className="h-12" />
              </NavLink>
              <NavLink to="https://github.com/rakib-gazi/">
                <img src={github} alt="" className="h-12" />
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
      <div className="flex justify-center items-center bg-active py-8">
        <p className="text-black text-center font-semibold text-xs md:text-base">
          @Copyright 2024, GameLens. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
