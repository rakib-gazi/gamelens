import React, { useContext } from "react";
import aboutBg from "../assets/about.jpg";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { AuthContext } from "../components/AuthProvider";
import Swal from "sweetalert2";

const Contact = () => {
  const { darkTheme } = useContext(AuthContext);
  const handleMessage = (e) => {
    e.preventDefault();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Message Sent successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <div
        className=" bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="container mx-auto">
          <h1 className="text-center text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold text-white py-20">
            Contact Us
          </h1>
        </div>
      </div>
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-logo rounded-xl text-white m-8 p-6 flex flex-col justify-center">
            <p className="text-lg mb-6">
              Have questions? We’re here to help! Reach out to us anytime, and
              we’ll get back to you as soon as possible.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-white text-xl" />
                <span className="text-lg">+8801876987622</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-white text-xl" />
                <span className="text-lg">bd.gazi67@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-white text-xl" />
                <span className="text-lg">
                  7A/16, Block-F, Aziz Moholla, Mohammadpur, Dhaka-1207
                </span>
              </div>
            </div>
          </div>
          <div className="p-8">
            <h3
              className={`text-2xl font-semibold mb-4 ${
                darkTheme ? "text-active" : "text-logo"
              }`}
            >
              Send Us a Message
            </h3>
            <form className="space-y-6" onSubmit={handleMessage}>
              <div>
                <label
                  className={`block  mb-2 ${
                    darkTheme ? "text-white" : "text-black"
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  className={`block  mb-2 ${
                    darkTheme ? "text-white" : "text-black"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  className={`block  mb-2 ${
                    darkTheme ? "text-white" : "text-black"
                  }`}
                >
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-logo text-white p-3 rounded-lg font-semibold hover:bg-active hover:text-black transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
