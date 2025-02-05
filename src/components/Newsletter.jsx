import { FaEnvelope } from "react-icons/fa";
import aboutBg from "../assets/about.jpg";
import Swal from "sweetalert2";
const Newsletter = () => {
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
    <div
      className=" grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 rounded-3xl bg-cover bg-no-repeat bg-center py-12 mb-12 mx-2 md:mx-2 lg:mx-2 xl:mx-0"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="mb-6 md:mb-0 md:mr-8 text-center p-0 lg:p-8">
        <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-white">Sign up for our newsletter</h2>
        <p className="text-active text-xs lg:text-base">
          Stay up to date with the roadmap progress, announcements, and
          exclusive discounts. Feel free to sign up with your email.
        </p>
      </div>
      <div className="flex items-center w-full md:w-auto p-0 lg:p-8">
        <div className="relative flex-grow">
          <FaEnvelope className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full  pl-10 pr-4 py-1.5 lg:py-3 rounded-l-lg border  border-gray-700 bg-gray-800 text-gray-300 placeholder-gray-500 "
          />
        </div>
        <button onClick={handleMessage} className="bg-active text-black px-4 py-2 text-xs lg:text-base outline outline-active rounded-r-lg font-semibold transition">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
